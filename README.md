# German Football - Bundesliga
This is a web page that displays League Table and Match Stats of 2 German football leagues (Bundesliga 1, 2)

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

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```
- Create a **config.env** file inside **server/config/** folder.
- Add your **MONGO_URI** to **config.env** file.
- Add **PORT=5000** inside **config.env** file.
- For the data set check [README](server/_data) file in _data.

## Files Info
1. csv2json.js
2. getTeams.js
3. seeder.js
4. server.js

## App Info
### Author
[Khoa Nguyen](https://henrykhoanguyen.github.io/)
visit my website lol

### Version
1.0.0

### License
This project is licensed under the MIT License