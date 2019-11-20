const mongoose = require("mongoose");

const BundesligaSchema = new mongoose.Schema({
  Div: {
    type: String,
    enum: ["D1", "D2"], // Devision 1, 2
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
  FTHG: {
    type: String
  },
  // Full Time Away Team Goals
  FTAG: {
    type: String
  },
  // Full Time Result
  FTR: {
    type: String,
    enum: ["H", "D", "A"] // H=Home Win, D=Draw, A=Away Win
  },
  // Haft Time Home Team Goals
  HTHG: {
    type: String
  },
  // Haft Time Away Team Goals
  HTAG: {
    type: String
  },
  // Home Team Shots
  HS: {
    type: String
  },
  // Away Team Shots
  AS: {
    type: String
  },
  // Home Team Shots on Target
  HST: {
    type: String
  },
  // Away Team Shots on Target
  AST: {
    type: String
  },
  // Home Team Fouls Committed
  HF: {
    type: String
  },
  // Away Team Fouls Committed
  AF: {
    type: String
  },
  // Home Team Corners
  HC: {
    type: String
  },
  // Away Team Corners
  AC: {
    type: String
  },
  // Home Team Yellow Cards
  HY: {
    type: String
  },
  // Away Team Yellow Cards
  AY: {
    type: String
  },
  // Home Team Red Cards
  HR: {
    type: String
  },
  // Away Team Red Cards
  AR: {
    type: String
  }
});
