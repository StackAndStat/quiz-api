import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Read JSON file
const quiz = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));

// API endpoint
app.get("/api/quiz", (req, res) => {
  res.json(quiz);
});

// Health check
app.get("/", (req, res) => {
  res.send("IR Quiz API is running!. Go to /api/quiz");
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
