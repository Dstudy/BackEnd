const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Kiểm tra tài khoản (ví dụ hardcode)
  if (username === 'test' && password === '123456') {
    res.json({ success: true, token: 'abc123' });
  } else {
    res.status(401).json({ success: false, message: 'Sai tài khoản hoặc mật khẩu' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));