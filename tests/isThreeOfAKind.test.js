const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that threeOfAKind returns truthy is three of a kind', () => {
  let hand = new Hand('♥4', '♦4', '♣4', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
});

test('check that isFlush returns falsey if not flush', () => {
  let hand = new Hand('♣2', '♣6', '♥9', '♣8', '♣7');
  expect(CompareHands.isFlush(hand)).toBeFalsy();
});