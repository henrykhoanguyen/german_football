const connectDB = require("./config/db");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const errorHandler = require("./middleware/errors");
const cors = require('cors');
const path = require('path');

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to DB
connectDB();

// Route files
const matches = require("./routes/matches");
const standings = require("./routes/standings");

const app = express();

// Body parser
app.use(express.json());
app.use(cors());

// Mount routers
app.use("/api/v1/matches", matches);
app.use("/api/v1/standings", standings);

// Use my error handler
app.use(errorHandler);

// Serve static assests if in production
if(process.env.NODE_ENV === 'production'){
  // Set static folder
  app.use(express.static('german-football-client/dist'));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'german-football-client', 'dist', 'index.html'));
  });
}

// Get port to be connected to
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});