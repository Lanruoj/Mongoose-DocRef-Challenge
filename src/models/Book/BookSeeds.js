const { Book } = require("src/models/Book/BookModel");

const bookSeeds = [
  {
    name: "Jitterbug Perfume",
    authorName: "Tom Robbins",
    yearPublished: 1984,
  },
  {
    name: "Shantaram",
    authorName: "Gregory David Roberts",
    yearPublished: 2003,
  },
  {
    name: "The Catcher in the Rye",
    authorName: "J. D. Salinger",
    yearPublished: 1951,
  },
];

module.exports = { bookSeeds };
