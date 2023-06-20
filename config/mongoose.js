// require the library
const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb://localhost/toDo_db");

// acquire the connection to check if it is successfully connected
const db = mongoose.connection;

// error
db.on("error", console.error.bind(console, "error in connection"));

// up and running then print the message
db.once("open", function () {
  console.log("Successfully connected to the database");
});
