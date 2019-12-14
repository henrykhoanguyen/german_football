const dotenv = require("dotenv");
const connectDB = require("./config/db");
const fs = require("fs");
const colors = require("colors");
const { Team } = require("./utils/team");

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
} else if (process.argv[3] === undefined && process.argv[2] === "-i") {
  console.log(
    "Please enter season folder and division number\n(e.g: 16-17/D1)"
  );
  process.exit();
}

// console.log(matches);
matches.forEach(element => {
  console.log(element.HomeTeam, element.AwayTeam);
  
});

process.exit();
