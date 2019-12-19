const mongoose = require("mongoose");

const StandingSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Division: {
    type: String,
    enum: ["D1", "D2"], // Division 1, 2
    required: true
  },
  Win: {
    type: Number,
    required: true
  },
  Lost: {
    type: Number,
    required: true
  },
  Draw: {
    type: Number,
    required: true
  },
  GoalsFor: {
    type: Number,
    required: true
  },
  GoalsAgainst: {
    type: Number,
    required: true
  },
  GoalsDifferences: {
    type: Number,
    required: true
  },
  Points: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Standing", StandingSchema);