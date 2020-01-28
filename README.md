# German Football - Bundesliga
 **https://german-futball.herokuapp.com/**

>This is a web page that displays League Table and Match Stats of 2 German football leagues (Bundesliga 1, 2)
>
> **Disclaimer:**
> I love football, but I am also :us:American:us:. There is another type of sport in my country that is called football. So, I will use the term 'soccer' and 'football' interchangeably. Cheer! :)

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the Angular client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

- Create a **config.env** file inside **server/config/** folder.
- Add your **MONGO_URI** to **config.env** file.
- Add **PORT=5000** inside **config.env** file.
- For the data set check [README](server/_data) file in \_data.

## Files Info

**1. csv2json.js**<br/>
Purpose: to parse csv files in data folder into json files.<br/>

Utilization:

- To parse csv file:
  - `node csv2json.js <season_folder/league_file>`
  - Ex: `node csv2json.js 16-17/D1`. **16-17** is a season folder inside \_data folder. **D1** is csv file name inside chosen league folder that contains all 306 leagues matches' information. The "D1" name will also be used to generate a json file that also contains parsed data from csv file. D1 stands for 1st Division football league (Bundesliga) in Germany. D2 stands for 2nd Division football league (Bundesliga 2) in Germany.

**2. seeder.js**<br/>
Purpose: to read league's matches json file and push the matches dat into mongo database.<br/>

Utilization:

- To import data to database:
  - `node seeder.js -i <season_folder/league_file>`.
  - Ex: `node seeder.js -i 16-17/D1`. **16-17** is a season folder inside \_data folder. **D1** is a json file inside chosen league folder that contains all 306 league matches' information. D1 stands for 1st Division football league (Bundesliga) in Germany. D2 stands for 2nd Division football league (Bundesliga 2) in Germany.
- To delete data from database:
  - `node seeder.js -d` will trigger deleteData method.
  - deleteData method will delete all matches data in database.

**3. getTeams.js**<br/>
Purpose: to get teams and teams' information from specific season in selected json filed. Then, it will push to mongodb.<br/>

Utilization:

- To import team's info and standing into database:
  - `node getTeam.js -i <season_folder/league_file>`.
  - `node getTeam.js -i 16-17/D1`. **16-17** is a season folder inside \_data folder. **D1** is a json file inside chosen league folder that contains all 306 league matches' information.
  - `importData` method will run through some matches from 306 matches and retrieves all teams that played in the chosen season. Then, the method will run one more time through all matches and get team's season performance (total points, number of win, lost, draw, goals for, goal against, and goals difference). Once it finishes collecting all data, it will push it onto mongodb database.
- To delete team's info and standing from database:
  - `node getTeam.js -d` will trigger deleteData method.
  - `deleteData` method will delete team's standings on database.

**4. server.js**<br/>
Purpose: main server file that connect to server to mongodb, middleware, mount port and routes. <br/>

## App Info

### Author

[Khoa Nguyen](https://henrykhoanguyen.github.io/)
visit my website lol

### Version

1.0.0

### License

This project is licensed under the MIT License
