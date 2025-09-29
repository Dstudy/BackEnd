module.exports = (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body || {};
    if (username === "test" && password === "123456") {
      res.status(200).json({ success: true, token: "abc123" });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Sai tài khoản hoặc mật khẩu" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
