const jwt = require("jsonwebtoken");
const { SECRET } = require("../../config");

// 检查token状态
const tokenCheckMiddleware = (req, res, next) => {
  const token = req.get("token");
  if (!token) {
    return res.json({
      code: 500,
      msg: "missing token",
      data: null,
    });
  }

  // 校验token
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.json({
        code: 500,
        msg: "token verify fail",
        data: null,
      });
    }

    req.decoded = decoded;

    next();
  });
};

module.exports = {
  tokenCheckMiddleware,
};
