const { Schema, model: mmodel } = require("mongoose");

// 创建文档结构对象，属性与类型
const SchemaUser = new Schema({
  // id: String,
  name: String,
  age: Number,
});
// 创建模型对象，对文档操作的封装对象
const ModelUser = mmodel("users", SchemaUser);

// 账号类
const SchemaAccount = new Schema({
  username: String,
  pwd: String,
});
const ModelAccount = mmodel("account", SchemaAccount);

module.exports = {
  ModelUser,
  ModelAccount,
};
