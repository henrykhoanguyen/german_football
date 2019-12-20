const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
// Model
const Standings = require("../models/Standing");

// @desc    Get all matches
// @route   GET /api/v1/standing
// @access  Public
exports.getStanding = asyncHandler(async (req, res, next) => {

  let query = Standings.find(req.query);
  query = query.sort({Points: -1, GoalsDifference: -1}) // sort by points then goals difference
  const results = await query.populate("standings");

  // console.log(results);
  res.status(200).json({
    success: true,
    count: results.length,
    data: results
  });
});