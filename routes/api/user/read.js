// 普通查询
const apiRead = (model, req, res) => {
  model
    .find({ name: "AT" })
    .exec()
    .then((data) => {
      res.json({
        data,
      });
    });
};

// 精准查询
const apiReadExactly = (model, req, res) => {
  const { id } = req.params;
  model
    .find({ _id: id })
    .exec()
    .then((data) => {
      res.json({
        code: 200,
        msg: "读取成功",
        data,
      });
    })
    .catch((err) => {
      res.json({
        code: 500,
        msg: "未找到对应id",
        data: null,
      });
    });
};

// 条件查询
const apiReadFilter = (model, req, res) => {
  // // 普通筛选
  // await model.find()
  //   .where("age")
  //   .equals(23)
  //   .then((data) => {
  //     console.log(data);
  //     res.json({ msg: "查询成功", data });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.json({ msg: "查询失败", err });
  //   });

  // // 字段筛选，只返回 _id + select()内字段，_id 不返回需要手动设为 0
  // await model.find()
  //   .select({ age: 1 })
  //   .then((data) => {
  //     console.log(data);
  //     res.json({ msg: "查询成功", data });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.json({ msg: "查询失败", err });
  //   });

  // 数据排序，1 正序，-1 倒序
  model
    .find()
    .select({ age: 1, _id: 0 })
    .sort({ age: -1 })
    // 跳过
    .skip(0)
    // 仅限
    .limit(3)
    .then((data) => {
      res.json({ msg: "查询成功", data });
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: "查询失败", err });
    });
};

module.exports = {
  apiRead,
  apiReadExactly,
  apiReadFilter,
};
