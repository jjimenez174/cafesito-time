const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

const users = []; // This is a simple in-memory store. Use a database in production.
const SECRET_KEY = "your_secret_key";

app.use(bodyParser.json());

// Register endpoint
app.post("/auth/register", (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
  users.push({ username, password: hashedPassword });
  res.status(201).send({ message: "User registered successfully", token });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
