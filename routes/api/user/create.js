module.exports = (model, req, res) => {
  //   // 新增 way_1
  //   const data0 = new model({
  //     name: "AT",
  //     age: 22,
  //   });

  //   data0
  //     .save()
  //     .then(() => {
  //       console.log(data0);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // 新增 way_2
  model
    .create({
      name: "AT",
      age: 23,
    })
    .then((data) => {
      res.json({ msg: "添加成功", data });

      //   关闭数据库连接(项目运行过程中不会使用该代码)
      // mdisconnect();
    })
    .catch((err) => {
      res.json({ msg: "插入失败", err });
    });

  //   // 新增 way_3     大量插入
  //   model.insertMany([
  //     {
  //       name: "AT",
  //       age: 23,
  //     },
  //     {
  //       name: "AT",
  //       age: 23,
  //     },
  //   ]).then((err) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log("insert success");
  //   });
};
