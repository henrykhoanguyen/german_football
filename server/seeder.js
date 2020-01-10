// const mongoose = require("mongoose");
const fs = require("fs");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models
const Matches = require("./models/Matches");
console.log("File is running. Connecting to database...");
// Connect to DB
connectDB();

let matches = {};

// Read JSON files
if (process.argv[3] !== undefined && process.argv[2] === "-i") {
  matches = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/${process.argv[3]}.json`, "utf-8")
  );
} else if (process.argv[3] === undefined && process.argv[2] === "-i") {
  console.log("Please enter season folder and division number\n(e.g: 16-17/D1)")
  process.exit();
}

// Import into DB
const importData = async () => {
  try {
    await Matches.create(matches);
    console.log("Data imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Matches.deleteMany();
    console.log("Data destroyed...".red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
