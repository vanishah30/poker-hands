const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isFullHouse returns truthy is three of a kind', () => {
    let hand = new Hand('♥Q', '♦Q', '♣Q', '♠T', '♠T');
    expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

test('check that isFullHouse  returns falsey if not full house', () => {
    let hand = new Hand('♣7', '♣6', '♥9', '♣8', '♣7');
    expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});

test('test that falsy isFullHouse returns as 0', () => {
  let hand = new Hand('♣7', '♣6', '♥9', '♣8', '♣7');
  expect(CompareHands.isFullHouse(hand)).toBe(0)
});

test('check that isFullHouse returns a higher score for a stronger hand', () => {
    let hand1 = new Hand('♥Q', '♦Q', '♣Q', '♠T', '♠T');
    let hand2 = new Hand('♣7', '♣6', '♥9', '♣8', '♣7');
    let hand1Score = CompareHands.isFullHouse(hand1);
    let hand2Score = CompareHands.isFullHouse(hand2);
    expect(hand1Score).toBeGreaterThan(hand2Score);
});