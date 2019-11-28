const csv = require("csv-parser");
const fs = require("fs");
const Bundesliga = require('./models/Bundesliga');
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

var results = [];

var writable = fs.createWriteStream(`${__dirname}/_data/test.json`);
// TODO: working on parsing csv file with different package (csvtojson)
fs.createReadStream(`${__dirname}/_data/16-17/D1_copy.csv`)
  .pipe(csv())
  .on("data", data => {
    // console.log(data)
    results.push(data);
  })
  .on("end", () => {
    writable.write(JSON.stringify(results));
    // the finish event is emitted when all data has been flushed from the stream
    writable.on("finish", () => {
      console.log("wrote all data to file");
    });

    // close the stream
    writable.end();
  });
