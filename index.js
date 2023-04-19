const DeckOfCards = require('./DeckOfCards');
const Hand = require('./Hand');
const CompareHands = require('./CompareHands');

// ♥♦♣♠

let hand1 = new Hand('♥9', '♥T', '♥J', '♥Q', '♥K');
let hand2 = new Hand('♣9', '♣5', '♣J', '♦Q', '♣K');
console.log(CompareHands.compare(hand1, hand2));

