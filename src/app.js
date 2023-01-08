const mongoose = require("mongoose");
const { Book } = require("./models/Book/BookModel");
mongoose.set("strictQuery", true);

async function dbConnect() {
  let databaseURL = "mongodb://localhost:27017/BookClub";
  await mongoose.connect(databaseURL);
  console.log("Database connected");
}

dbConnect();

async function dbSeed(seeds) {
  await Book.insertMany(seeds);
}
const { bookSeeds } = require("./models/Book/BookSeeds");
// console.log(bookSeeds);
dbSeed(bookSeeds);
