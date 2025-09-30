export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    if (username === "admin" && password === "123") {
      res.status(200).json({ success: true, token: "fake-jwt-token" });
    } else {
      res.status(401).json({ success: false, error: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
