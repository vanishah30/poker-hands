const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isOnePair returns correct value if it  is one pair', () => {
    let hand1 = new Hand('♥T', '♦T', '♣4', '♠3', '♠7')
    let hand2 = new Hand('♥Q', '♦Q', '♥7', '♣3', '♣4')
    let hand1Score = CompareHands.isOnePair(hand1);
    let hand2Score = CompareHands.isOnePair(hand2)
    expect(hand2Score).toBeGreaterThan(hand1Score);
});

test('check that isOnePair returns 0 if not one pair', () => {
    let hand = new Hand('♣5', '♣6', '♥J', '♣8', '♣7');
    let result = CompareHands.isOnePair(hand);
    let expected = 0;
    expect(result).toBe(expected);
});