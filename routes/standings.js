const express = require("express");
const { getStanding, getSeasons } = require("../controllers/standings");
const Standings = require("../models/Standing");

const advancedResults = require("../middleware/advancedResults");

const router = express.Router();

router.route("/").get(advancedResults(Standings, "standings"), getStanding);
router.route("/seasons").get(getSeasons);

module.exports = router;
