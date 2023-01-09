const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  _id: Schema.Types.ObjectId,
  book: { type: Schema.Types.ObjectId, ref: "Book" },
  member: { type: Schema.Types.ObjectId, ref: "Member" },
  reviewText: String,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };
