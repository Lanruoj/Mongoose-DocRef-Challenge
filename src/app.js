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

  const results = await Book.aggregate([
    { $match: { name: "Jitterbug Perfume" } },
    {
      $lookup: {
        from: "reviews",
        localField: "_id",
        foreignField: "book",
        as: "reviews",
      },
    },
  ]).exec((err, results) => {
    console.log(results[0]);
  });
}

createDB();
