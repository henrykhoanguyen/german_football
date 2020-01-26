const mongoose = require("mongoose");

const MatchesSchema = new mongoose.Schema({
  Season: {
    type: String,
    required: true
  },
  Division: {
    type: String,
    enum: ["D1", "D2"], // Division 1, 2
    required: true
  },
  Date: {
    type: String,
    required: true
  },
  HomeTeam: {
    type: String,
    required: true
  },
  AwayTeam: {
    type: String,
    required: true
  },
  // Full Time Home Team Goals
  FullTimeHomeGoals: {
    type: Number,
    required: true
  },
  // Full Time Away Team Goals
  FullTimeAwayGoals: {
    type: Number,
    required: true
  },
  // Full Time Result
  FullTimeResult: {
    type: String,
    enum: ["H", "D", "A"], // H=Home Win, D=Draw, A=Away Win
    required: true
  },
  // Haft Time Home Team Goals
  HaftTimeHomeGoals: {
    type: Number,
    required: true
  },
  // Haft Time Away Team Goals
  HaftTimeAwayGoals: {
    type: Number,
    required: true
  },
  // Home Team Shots
  HomeShots: {
    type: Number,
    required: true
  },
  // Away Team Shots
  AwayShots: {
    type: Number,
    required: true
  },
  // Home Team Shots on Target
  HomeShotsTarget: {
    type: Number,
    required: true
  },
  // Away Team Shots on Target
  AwayShotsTarget: {
    type: Number,
    required: true
  },
  // Home Team Fouls Committed
  HomeFouls: {
    type: Number,
    required: true
  },
  // Away Team Fouls Committed
  AwayFouls: {
    type: Number,
    required: true
  },
  // Home Team Corners
  HomeCorners: {
    type: Number,
    required: true
  },
  // Away Team Corners
  AwayCorners: {
    type: Number,
    required: true
  },
  // Home Team Yellow Cards
  HomeYellow: {
    type: Number,
    required: true
  },
  // Away Team Yellow Cards
  AwayYellow: {
    type: Number,
    required: true
  },
  // Home Team Red Cards
  HomeRed: {
    type: Number,
    required: true
  },
  // Away Team Red Cards
  AwayRed: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Matches", MatchesSchema);
