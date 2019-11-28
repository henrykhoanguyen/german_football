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
    var info = {};

    // Format data into correct type
    // String type
    info.Division = data.Div;
    info.Date = new Date("20" + String(data.Date).split('/')[2] + "-" +  String(data.Date).split('/')[1] + "-" + String(data.Date).split('/')[0]);
    info.HomeTeam = data.HomeTeam;
    info.AwayTeam = data.AwayTeam;
    info.FullTimeResult = data.FTR;

    // Num type
    info.FullTimeHomeGoals = Number(data.FTHG);
    info.FullTimeAwayGoals = Number(data.FTAG);
    info.HaftTimeHomeGoals = Number(data.HTHG);
    info.HaftTimeAwayGoals = Number(data.HTAG);
    info.HomeShots = Number(data.HS);
    info.AwayShots = Number(data.AS);
    info.HomeShotsTarget = Number(data.HST);
    info.AwayShotsTarget = Number(data.HST);
    info.HomeFouls = Number(data.HST);
    info.AwayFouls = Number(data.AF);
    info.HomeCorners = Number(data.HC);
    info.AwayCorners = Number(data.AC);
    info.HomeYellow = Number(data.HY);
    info.AwayYellow = Number(data.AY);
    info.HomeRed = Number(data.HR);
    info.AwayRed = Number(data.AR);

    results.push(info);
  })
  .on("end", () => {
    console.log(results);
    // Write parsed data into JSON file
    writable.write(JSON.stringify(results, null, 10));

    // the finish event is emitted when all data has been flushed from the stream
    writable.on("finish", () => {
      console.log("Wrote all data to file".green.inverse);
    });

    // close the stream
    writable.end();
  });
