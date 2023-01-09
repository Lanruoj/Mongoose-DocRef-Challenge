const mongoose = require("mongoose");
const { Book } = require("./models/Book/BookModel");
const { bookSeeds } = require("./models/Book/BookSeeds");
const { Member } = require("./models/Member/MemberModel");
const { memberSeeds } = require("./models/Member/MemberSeeds");
const { Review } = require("./models/Review/ReviewModel");
const { reviewSeeds } = require("./models/Review/ReviewSeeds");
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

  await Book.insertMany(bookSeeds)
    .then(() => {
      console.log("Books added");
    })
    .catch((err) => {
      console.log(err);
    });

  await Member.insertMany(memberSeeds)
    .then(() => {
      console.log("Members added");
    })
    .catch((err) => {
      console.log(err);
    });

  await Review.insertMany(reviewSeeds)
    .then(() => {
      console.log("Reviews added");
    })
    .catch((err) => {
      console.log(err);
    });

  const retrievedMember = await Member.findOne({ name: "Tane" })
    .populate("favouriteBook")
    .exec();
  // console.log(retrievedMember);

  const retrievedBook = await Book.findOne({
    name: "Jitterbug Perfume",
  }).lean();

  const bookResultReviews = await Review.find({
    book: retrievedBook._id,
  })
    .populate("book", "name")
    .populate("member", "name")
    .exec();

  console.log(bookResultReviews);

  retrievedBook.reviews = bookResultReviews;
  // console.log(retrievedBook);
}

createDB();
