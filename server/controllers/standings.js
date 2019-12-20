const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
// Model
const Standings = require("../models/Standing");

// @desc    Get all matches
// @route   GET /api/v1/standing
// @access  Public
exports.getStanding = asyncHandler(async (req, res, next) => {
  // TODO: make default season the latest
  console.log(req.query === {});
  // if (req.query === )
  let query = Standings.find(req.query || { Season: "17-18" });
  query = query.sort({Points: -1, GoalsDifference: -1}) // sort by points then goals difference
  const results = await query.populate("standings");
  
  // console.log(results);
  res.status(200).json({
    success: true,
    count: results.length,
    data: results
  });
});