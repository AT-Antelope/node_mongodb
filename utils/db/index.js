const { DBHOST, DBPORT, DBNAME } = require("../../config");

module.exports = (success, err) => {
  // 设置 err默认值
  if (typeof err !== "function") {
    err = () => {
      console.log("connection failed");
      return;
    };
  }

  const mongoose = require("mongoose");

  // connect to MongoDB
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);
  console.log(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

  //   first time
  mongoose.connection.once("open", () => {
    success();
  });

  mongoose.connection.on("error", () => {
    err();
  });

  mongoose.connection.on("close", () => {
    console.log("connection closed");
  });
};
