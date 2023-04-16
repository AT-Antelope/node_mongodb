module.exports = (model, req, res) => {
  // update_way1
  const { id } = req.params;
  console.log(req.body);
  model
    .updateOne({ _id: id }, req.body)
    .then(() => {
      // 返回最新数据，重新读取出来的
      model
        .findById(id)
        .select({ _id: 0 }) // 不返回 _id
        .then((data) => {
          res.json({ code: 200, msg: "更新成功", data });
        });
    })
    .catch((err) => {
      console.log(err);
      res.json({ code: 500, msg: "更新失败", data: null });
    });

  // // update_way2
  // await ModelUser.updateMany({ name: "AT" }, { age: 33 })
  //   .then((data) => {
  //     console.log(data);
  //     res.json({ msg: "更新成功", data });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.json({ msg: "更新失败", err });
  //   });

  // ---------------------------------------------------------------
  // // overwrite_way1
  // await ModelUser.findOne({ name: "AT" })
  //   .then((data) => {
  //     data.overwrite({ name: "AT", age: 33 });
  //     data.save();
  //     res.json({ msg: "更新成功", data });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.json({ msg: "更新失败", err });
  //   });

  // // overwrite_way2
  // ModelUser.replaceOne({ name: "AT" }, { name: "AT", age: 33 })
  //   .then((data) => {
  //     console.log(data);
  //     res.json({ msg: "更新成功", data });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.json({ msg: "更新失败", err });
  //   });
};
