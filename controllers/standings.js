const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
// Model
const Standings = require("../models/Standing");

// @desc    Get all standings
// @route   GET /api/v1/standings
// @access  Public
exports.getStanding = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc    Get all seasons 
// @route   GET /api/v1/standings/seasons
// @access  Public
exports.getSeasons = asyncHandler(async (req, res, next) => {
  const query = Standings.distinct("Season");
  const results = await query.populate("standings");
  // console.log(results);

  res.status(200).json({
    success: true,
    count: results.length,
    data: results
  })
});