const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
// Model
const Standings = require("../models/Standing");

// @desc    Get all matches
// @route   GET /api/v1/standing
// @access  Public
exports.getStanding = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});