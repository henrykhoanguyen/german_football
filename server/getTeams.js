const dotenv = require("dotenv");
const connectDB = require("./config/db");
const fs = require("fs");
const colors = require("colors");
const Team = require("./utils/team");
const HashTable = require("./utils/hashTable");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to DB
connectDB();

let matches = {};

// Read JSON files
if (process.argv[3] !== undefined && process.argv[2] === "-i") {
  matches = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/${process.argv[3]}.json`, "utf-8")
  );
  // console.log(matches);
} else if (process.argv[3] === undefined && process.argv[2] === "-i") {
  console.log(
    "Please enter season folder and division number\n(e.g: 16-17/D1)"
  );
  process.exit();
}
const hashtb = new HashTable();
// console.log(hashtb.isEnoughTeam());
// console.log(matches);

// Get all teams in the league
matches.forEach(info => {
  // console.log(element.HomeTeam, element.AwayTeam);
  if (!hashtb.isEnoughTeam()) {
    const homeInfo = new Team(info.HomeTeam, info.Division);
    const awayInfo = new Team(info.AwayTeam, info.Division);

    hashtb.put(homeInfo);
    hashtb.put(awayInfo);
  } else {
    return;
  }
});

// Get all teams' stats in the league
matches.forEach(info => {
  // Home Team
  const homeKey = hashtb.getKey(info.HomeTeam);
  const home = hashtb.getValue(homeKey);
  // Away Team
  const awayKey = hashtb.getKey(info.AwayTeam);
  const away = hashtb.getValue(awayKey);

  // Set result
  if (info.FullTimeResult === "H"){
    home.setWin();
    away.setLost();
  } else if (info.FullTimeResult === "A"){
    away.setWin();
    home.setLost();
  } else {
    home.setDraw();
    away.setDraw();
  }

  // Set goals
  home.setGoalFor(info.FullTimeHomeGoals);
  away.setGoalAgainst(info.FullTimeHomeGoals);

  home.setGoalAgainst(info.FullTimeAwayGoals);
  away.setGoalFor(info.FullTimeAwayGoals);
});


console.log(hashtb.showDistro());


process.exit();
