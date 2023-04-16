const { json } = require("express");
const express = require("express");
const router = express.Router();
const { ModelUser } = require("../../../utils/Models");

const apiCreate = require("./create");
const { apiDelete, apiDeleteExactly } = require("./delete");
const apiUpdate = require("./update");
const { apiRead, apiReadFilter, apiReadExactly } = require("./read");

// 新增
router.post("/users", async (req, res, next) => {
  await apiCreate(ModelUser, req, res);
});

// 删除
router.delete("/users", async (req, res, next) => {
  await apiDelete(ModelUser, req, res);
});

// 删除_精准
router.delete("/users/:id", async (req, res, next) => {
  await apiDeleteExactly(ModelUser, req, res);
});

// 更新_精准
router.patch("/users/:id", async (req, res, next) => {
  await apiUpdate(ModelUser, req, res);
});

// 查找
router.get("/users", async (req, res, next) => {
  await apiRead(ModelUser, req, res);
});

// 查找_精准
router.get("/users/:id", async (req, res, next) => {
  await apiReadExactly(ModelUser, req, res);
});

// !test
// 查找所有
router.get("/readAll", async (req, res, next) => {
  await ModelUser.find()
    .exec()
    .then((data) => {
      res.json({ msg: "查询成功", data });
    })
    .catch((err) => {
      res.json({ msg: "查询失败", err });
    });
});

// 条件查询
router.get("/readFilter", async (req, res, next) => {
  await apiReadFilter(ModelUser, req, res);
});

module.exports = router;
