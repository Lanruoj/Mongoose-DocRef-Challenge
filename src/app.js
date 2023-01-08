const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

async function dbConnect() {
  let databaseURL = "mongodb://localhost:27017/BookClub";
  await mongoose.connect(databaseURL);
  console.log("Database connected");
}

dbConnect();
