module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "popo" && req.body.password === "popo") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
  }
  next();
};
