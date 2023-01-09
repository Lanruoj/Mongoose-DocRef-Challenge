const { Member } = require("./MemberModel");
const { bookSeeds } = require("../Book/BookSeeds");

const member1 = new Member({
  name: "Tane",
  favouriteBook: bookSeeds[0]._id,
});
const member2 = new Member({
  name: "Archie",
  favouriteBook: bookSeeds[1]._id,
});
const member3 = new Member({
  name: "John",
  favouriteBook: bookSeeds[2]._id,
});

const memberSeeds = [member1, member2, member3];

module.exports = { memberSeeds };
