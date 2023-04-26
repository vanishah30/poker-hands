const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isOnePair returns a truthy if it is one pair', () => {
    let hand = new Hand('♥T', '♦T', '♣4', '♠3', '♠7');
    expect(CompareHands.isOnePair(hand)).toBeTruthy();
});

test('check that isOnePair returns a falsy if it is not one pair', () => {
    let hand = new Hand('♣5', '♣6', '♥J', '♣8', '♣7');
    expect(CompareHands.isOnePair(hand)).toBeFalsy();
});

test('Test that isOnePair returns highter score for one pair', () => {
    let hand1 = new Hand('♥T', '♦T', '♣4', '♠3', '♠7');
    let hand2 = new Hand('♥Q', '♦J', '♥7', '♣3', '♣2');
    let hand1Score = CompareHands.isOnePair(hand1);
    let hand2Score = CompareHands.isOnePair(hand2);
    expect(hand1Score).toBeGreaterThan(hand2Score);
});

test('check that isOnePair returns 0 if not one pair', () => {
    let hand = new Hand('♣5', '♣6', '♥J', '♣8', '♣7');
    expect(CompareHands.isOnePair(hand)).toBe(0)
});