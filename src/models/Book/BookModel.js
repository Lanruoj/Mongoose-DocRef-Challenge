const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  name: String,
  authorName: String,
  yearPublished: Number,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = { Book };
