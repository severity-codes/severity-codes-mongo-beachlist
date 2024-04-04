// Import necessary modules
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");

// Initialize an instance of Express
const app = express();

// Serve static files from the "client/build" directory
app.use(express.static("./client/build"));

// Enable CORS for all routes
app.use(cors());

// Use Morgan for logging requests
app.use(morgan("dev"));

// Parse JSON request bodies
app.use(express.json());

// Database connection string
const uri =
  "mongodb+srv://forevertwilightangel:P8B28Df1dzYPbYud@beachy.3ekwely.mongodb.net/beachy?retryWrites=true&w=majority&appName=beachy";

// Async function to connect to the database
async function run() {
  // Connect to the database using Mongoose
  await mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.error(err);
    });

  console.log("Connected to MongoDB Atlas");
}

// Start the server and listen on port 8000
app.listen(8000, () => console.log(`Boom! Up and running on port 8000`));

// Use the "/beachy" route with the beachRouter
app.use("/beachy", require("./routes/beachRouter"));

// Run the async function to connect to the database
run().catch(console.dir);
