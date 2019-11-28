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

// Read JSON files
const bundesliga = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/test.json`, "utf-8")
);


const importData = async () => {
  try {
    // await console.log(bundesliga)
    await Bundesliga.create(bundesliga);
    console.log("Data imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

if (process.argv[2] === "-i") {
  importData();
}
