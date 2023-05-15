require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./config/db");
const cors = require("cors");
const router = require("./routes/task.router");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5001;

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
