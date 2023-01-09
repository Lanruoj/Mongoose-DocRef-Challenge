const mongoose = require("mongoose");
const { Book } = require("./models/Book/BookModel");
const { Member } = require("./models/Member/MemberModel");
const { Review } = require("./models/Review/ReviewModel");
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

  const member1 = new Member({
    name: "Tane",
    favouriteBook: book1._id,
  });
  const member2 = new Member({
    name: "Archie",
    favouriteBook: book2._id,
  });
  const member3 = new Member({
    name: "John",
    favouriteBook: book3._id,
  });
  const members = [member1, member2, member3];

  await Member.insertMany(members)
    .then(() => {
      console.log("Members added");
    })
    .catch((err) => {
      console.log(err);
    });

  const review1 = new Review({
    book: book1._id,
    member: member1._id,
    reviewText: "Good book, a little confusing though",
  });
  const review2 = new Review({
    book: book2._id,
    member: member2._id,
    reviewText: "Found it a bit hard to believe but it was an enjoyable read",
  });
  const review3 = new Review({
    book: book3._id,
    member: member3._id,
    reviewText: "Amazing book - an absolute classic",
  });
  const reviews = [review1, review2, review3];
  await Review.insertMany(reviews)
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

  const retrievedBook = await Book.findById(book1._id).lean();
  const bookResultReviews = await Review.find({ book: retrievedBook._id });
  retrievedBook.reviews = bookResultReviews;
  // console.log(retrievedBook);
}

createDB();
