const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isStraight returns truthy if straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  expect(CompareHands.isStraight(hand)).toBeTruthy();
});

test('check that isStraight returns falsy if not straight', () => {
  let hand = new Hand('♥9', '♦2', '♣J', '♥5', '♦6');
  expect(CompareHands.isStraight(hand)).toBeFalsy();
});

test('check that falsy isStraight returns as 0', () => {
  let hand = new Hand('♥9', '♦2', '♣J', '♥5', '♦6');
  expect(CompareHands.isStraight(hand)).toBe(0);
});

test('check that isStraight returns a higher score for a stronger hand(if two hands but with straight', () => {
  let hand1 = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  let hand2 = new Hand('♥6', '♦5', '♣4', '♥3', '♦2');
  let hand1Score = CompareHands.isStraight(hand1);
  let hand2Score = CompareHands.isStraight(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);

});


