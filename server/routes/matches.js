const express = require("express");
const { getMatches, getMatch } = require("../controllers/matches");
// Model
const Bundesliga = require("../models/Bundesliga");

const advancedResults = require("../middleware/advancedResults");

const router = express.Router({ mergeParams: true });

router.route("/").get(advancedResults(Bundesliga, "bundesliga"), getMatches);

router.route("/:id").get(getMatch);

module.exports = router;
