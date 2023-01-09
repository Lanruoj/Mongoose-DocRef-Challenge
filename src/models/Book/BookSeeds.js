const { Book } = require("./BookModel");

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

const bookSeeds = [book1, book2, book3];

module.exports = { bookSeeds };
