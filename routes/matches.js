const express = require("express");
const { getMatches, getMatch } = require("../controllers/matches");
// Model
const Matches = require("../models/Matches");

const advancedResults = require("../middleware/advancedResults");

const router = express.Router({ mergeParams: true }); //merge parameters together

router.route("/").get(advancedResults(Matches, "matches"), getMatches);

router.route("/:id").get(getMatch);

module.exports = router;
