const mongoose = require("mongoose");
const fs = require("fs");
const colors = require("colors");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models
const Bundesliga = require("./models/Bundesliga");

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

let bundesliga = {};
// Read JSON files
if (process.argv[3] !== undefined) {
  bundesliga = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/${process.argv[3]}.json`, "utf-8")
  );
} else {
  console.log("Please enter season folder and division number\n(e.g: 16-17/D1)")
  process.exit();
}

// Import into DB
const importData = async () => {
  try {
    await Bundesliga.create(bundesliga);
    console.log("Data imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Bundesliga.deleteMany();
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
