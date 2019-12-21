const advancedResults = (model, populate) => async (req, res, next) => {
  // const reqQuery = {...req.query };
  let query;

  if (req.query.Season === undefined || req.query.Season === null) {
    req.query.Season = "17-18"; // Set season to the latest season
  }

  // Copy req.query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeField = ["select", "sort", "limit"];

  // Loop over removeField and delete them from query
  removeField.forEach(params => delete reqQuery[params]);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);

  // Find resource
  // Find in database the query string after parsed
  query = model.find(JSON.parse(queryStr));

  // Get specific field(s) from query
  // and return results according to those fields
  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    // console.log(fields);
    query = query.select(fields);
    // console.log(query);
  }

  if (populate == "matches") {
    query = query.sort("Date"); // sort by date 
  } else if (populate == "standings") {
    query = query.sort({ Points: -1, GoalsDifference: -1 }); // sort by points then goals difference
  }

  if (populate) {
    // Populate query with results retrieved from database
    query = query.populate(populate);
  }
  // wait for results to come from database
  const results = await query;

  res.advancedResults = {
    success: true,
    count: results.length,
    data: results
  };
  next();
};

module.exports = advancedResults;
