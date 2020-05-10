const express = require("express");
const router = express.Router();
const Score = require("../models/Score");

// RETRIEVES ALL SCORES
router.get("/", async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 }).limit(10);
    res.json(scores);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMITS A NEW SCORE
router.post("/", async (req, res) => {
  const score = new Score({
    name: req.body.name,
    score: req.body.score,
    date: req.body.date,
  });
  try {
    const savedScore = await score.save();
    res.json(savedScore);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETES A SCORE
router.delete("/:scoreId", async (req, res) => {
  try {
    const removedScore = await Score.deleteOne({ _id: req.params.scoreId });
    res.json(removedScore);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
