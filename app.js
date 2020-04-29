require("dotenv/config");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Import Routes
const scoresRoute = require("./routes/scores");

// MIDDLEWARES - Executes when a route is hit
app.use(cors());
app.use(bodyParser.json());
app.use("/scores", scoresRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("This is the root");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("Connected to database.")
);

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
