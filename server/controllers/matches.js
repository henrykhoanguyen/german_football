const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
// Model
const Matches = require("../models/Matches");

// @desc    Get all matches
// @route   GET /api/v1/matches
// @access  Public
exports.getMatches = asyncHandler(async (req, res, next) => {
  // console.log(results);
  res.status(200).json(res.advancedResults);
});

// @desc    Get a single match
// @route   GET /api/v1/matches/:id
// @access  Public
exports.getMatch = asyncHandler(async (req, res, next) => {
  const match = await Matches.findById(req.params.id);

  if (!match) {
    // console.log("HELLO")
    return next(
      new ErrorResponse(
        `The match with id of ${req.params.id} does not exist`,
        404
      )
    );
  }
  // console.log(results);
  res.status(200).json({
    success: true,
    data: match
  });
});
