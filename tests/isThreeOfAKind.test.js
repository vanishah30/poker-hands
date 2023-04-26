const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isThreeOfAKind returns truthy is three of a kind', () => {
  let hand = new Hand('♥4', '♦4', '♣4', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
});

test('check that isThreeOfAKind returns falsey if not three fo a kind', () => {
  let hand = new Hand('♣2', '♣6', '♥9', '♣8', '♣7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeFalsy();
});

test('check that isThreeOfAKind returns 0 if not three fo a kind', () => {
  let hand = new Hand('♣2', '♣6', '♥9', '♣8', '♣7');
  expect(CompareHands.isThreeOfAKind(hand)).toBe(0);
});

test('check that isThreeOfAKind returns a higher score for a stronger hand', () => {
  let hand1 = new Hand('♥4', '♦4', '♣4', '♠3', '♠7');
  let hand2 = new Hand('♥6', '♦6', '♣6', '♠3', '♠7');
  let hand1Score = CompareHands.isThreeOfAKind(hand1);
  let hand2Score = CompareHands.isThreeOfAKind(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);

});