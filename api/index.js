const express = require("express");
const app = express();

app.use(express.json());

// API test
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend on Vercel!" });
});

// API login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "123") {
    res.json({ success: true, token: "fake-jwt-token" });
  } else {
    res.status(401).json({ success: false, error: "Invalid credentials" });
  }
});

// 👇 Export thay vì listen
module.exports = app;
