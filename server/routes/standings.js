const express = require("express");
const { getStanding } = require("../controllers/standings");
// const Standings = require("../models/Standing");

// const advancedResults = require("../middleware/advancedResults");

const router = express.Router();

router.route("/").get(getStanding);

module.exports = router;
