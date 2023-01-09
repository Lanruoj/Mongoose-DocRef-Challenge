const mongoose = require("mongoose");
const { Book } = require("./models/Book/BookModel");
mongoose.set("strictQuery", true);

async function dbConnect() {
  let databaseURL = "mongodb://localhost:27017/BookClub";
  await mongoose.connect(databaseURL);
  console.log("Database connected");
}

async function dbWipe() {
  console.log("Emptying out the database...");
  await mongoose.connection.db.dropDatabase();
  console.log("Database is now empty!");
}

async function createDB() {
  await dbConnect();
  await dbWipe();
  const book1 = new Book({
    name: "Jitterbug Perfume",
    authorName: "Tom Robbins",
    yearPublished: 1984,
  });

  const book2 = new Book({
    name: "Shantaram",
    authorName: "Gregory David Roberts",
    yearPublished: 2003,
  });

  const book3 = new Book({
    name: "The Catcher in the Rye",
    authorName: "J. D. Salinger",
    yearPublished: 1951,
  });

  const books = [book1, book2, book3];
  await Book.insertMany(books)
    .then(() => {
      console.log("Books added");
    })
    .catch((err) => {
      console.log(err);
    });
}

createDB();
