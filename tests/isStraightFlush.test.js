const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that StraightFlush returns truthy is straight flush', () => {
    let hand = new Hand('♥T', '♥9', '♥8', '♥7', '♥6');
    expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
});

test('check that StraightFlush  returns falsey if not straight flush', () => {
    let hand = new Hand('♣7', '♣6', '♥4', '♣8', '♣7');
    expect(CompareHands.isStraightFlush(hand)).toBeFalsy();
});

test('check that isStraightFlush falsy returns 0 if not straight flush', () => {
    let hand = new Hand('♣7', '♣6', '♥4', '♣8', '♣7');
    expect(CompareHands.isStraightFlush(hand)).toBe(0);
});

test('check that isStraightFlush returns a higher score for a stronger hand(if two hands but with straightFlush', () => {
  let hand1 = new Hand('♥T', '♥9', '♥8', '♥7', '♥6');
  let hand2 = new Hand('♥7', '♥6', '♥5', '♥4', '♥3');
  let hand1Score = CompareHands.isStraightFlush(hand1);
  let hand2Score = CompareHands.isStraightFlush(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);

});