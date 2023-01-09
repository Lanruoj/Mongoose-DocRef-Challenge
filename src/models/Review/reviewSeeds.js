const { Review } = require("./ReviewModel");
const { bookSeeds } = require("../Book/BookSeeds");
const { memberSeeds } = require("../Member/MemberSeeds");

const review1 = new Review({
  book: bookSeeds[0]._id,
  member: memberSeeds[0]._id,
  reviewText: "Good book, a little confusing though",
});
const review2 = new Review({
  book: bookSeeds[1]._id,
  member: memberSeeds[1]._id,
  reviewText: "Found it a bit hard to believe but it was an enjoyable read",
});
const review3 = new Review({
  book: bookSeeds[2]._id,
  member: memberSeeds[2]._id,
  reviewText: "Amazing book - an absolute classic",
});

const reviewSeeds = [review1, review2, review3];

module.exports = { reviewSeeds };
