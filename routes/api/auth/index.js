const { Router } = require("express");
const router = Router();
// const md5 = require("md5");
const jwt = require("jsonwebtoken");
const { ModelAccount } = require("../../../utils/Models");
const { tokenCheckMiddleware } = require("../../../utils/middlewares");
const { SECRET } = require("../../../config");

// 登录
router.post("/login", async (req, res) => {
  const { username, pwd } = req.body;
  await ModelAccount.findOne({ username, pwd })
    .then((data) => {
      console.log(data.id);
      const token = jwt.sign(
        {
          username: data.username,
          _id: data._id,
        },
        SECRET,
        { expiresIn: 60 }
      );
      // res.header({ token });
      res.json({
        code: 200,
        msg: "login success",
        data: token,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        code: 500,
        msg: "login fail",
        data: null,
      });
    });
});

// 登出
// uncompleted
router.post("/logout", tokenCheckMiddleware, async (req, res) => {
  await ModelAccount.findOne({ _id: req.decoded._id })
    .then((data) => {
      res.json({
        code: 200,
        msg: "logout success",
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        code: 500,
        msg: "logout fail",
        data: null,
      });
    });
});

module.exports = router;
