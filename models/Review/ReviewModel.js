const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  book: { type: mongoose.Types.ObjectId, ref: "Book" },
  member: { type: mongoose.Types.ObjectId, ref: "Member" },
  reviewText: String,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };
