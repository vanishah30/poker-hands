const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isFourOfAKind returns truthy is four of a kind', () => {
    let hand = new Hand('♥4', '♦4', '♣4', '♠4', '♠7');
    expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});

test('check that isFourOfAKind returns falsey if not four of a kind', () => {
    let hand = new Hand('♣5', '♣6', '♥4', '♦5', '♣7');
    expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});

test('test that falsy isFourOfAKind returns as 0', () => {
  let hand = new Hand('♣5', '♣6', '♥4', '♦5', '♣7');
  expect(CompareHands.isFourOfAKind(hand)).toBe(0)
});

test('check that isFourOfAKind returns a higher score for a stronger hand', () => {
    let hand1 = new Hand('♥4', '♦4', '♣4', '♠4', '♠7');
    let hand2 = new Hand('♣5', '♠5', '♥5', '♦5', '♣7');
    let hand1Score = CompareHands.isFourOfAKind(hand1);
    let hand2Score = CompareHands.isFourOfAKind(hand2);
    console.log("hand1Score", hand1Score);
    console.log("hand2Score", hand2Score);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});