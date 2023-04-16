const apiDelete = (model, req, res) => {
  // 批量删除为 deleteMany
  const result = model
    .deleteOne({ name: "AT" })
    .then((data) => {
      // 无匹配内容时，中断
      if (data.deletedCount < 1) {
        res.json({ msg: "删除失败", err: "未找到匹配的内容" });
      }

      res.json({
        msg: "删除成功",
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ code: 500, msg: "未找到对应id", data: null });
    });
};

// 精准删除
const apiDeleteExactly = (model, req, res) => {
  const { id } = req.params;
  model
    .deleteOne({ _id: id })
    .then((data) => {
      // 无匹配内容时，中断
      if (data.deletedCount < 1) {
        res.json({ code: 500, msg: "未找到对应id", data: null });
        return;
      }

      res.json({
        code: 200,
        msg: "删除成功",
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ code: 500, msg: "未找到对应id", data: null });
    });
};

module.exports = {
  apiDelete,
  apiDeleteExactly,
};
