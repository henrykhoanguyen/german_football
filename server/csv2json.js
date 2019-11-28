const csv = require("csv-parser");
const fs = require("fs");
const colors = require("colors");

var results = [];

var readable = fs.createReadStream(`${__dirname}/_data/16-17/D1_copy.csv`);
var writable = fs.createWriteStream(`${__dirname}/_data/test.json`);

// Parser to parse csv file
readable
  .pipe(csv())
  // Read in data from parser
  .on("data", data => {
    results.push(data);
  })
  .on("end", () => {
    // Write parsed data into JSON file
    writable.write(JSON.stringify(results, null, 10));

    // the finish event is emitted when all data has been flushed from the stream
    writable.on("finish", () => {
      console.log("Wrote all data to file".green.inverse);
    });

    // close the stream
    writable.end();
  });
