const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberSchema = new Schema({
  name: String,
  favouriteBook: { type: Schema.Types.ObjectId, ref: "Book" },
});

const Member = mongoose.model("Member", memberSchema);

module.exports = { Member };
