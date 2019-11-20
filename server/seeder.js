const csv = require("csv-parser");
const fs = require("fs");
// const Bundesliga = require('./models/Bundesliga');
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");


// // Load env vars
// dotenv.config({ path: "./config/config.env" });


// // Connect to DB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// });

var results = [];

// TODO: working on parsing csv file with different package (csvtojson)
fs.createReadStream(
  "/Users/khoanguyen/Downloads/School/code/Projects/german_football/_data/16-17/D1_copy.csv"
)
  .pipe(csv({
    mapHeaders: ({ header, index }) => header.toLowerCase()
  } | ['HomeTeam']))
  .on("headers", header => console.log(header[0]))
  .on("end", () => {
    // try {
    //   await Bundesliga.create(results);
    //   process.exit();
    // } catch (error) {
    //   console.log(error)
    // }
      console.log(results)

  });
