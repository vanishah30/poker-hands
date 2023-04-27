const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isTwoPair returns truthy is two pair', () => {
    let hand = new Hand('♥T', '♦T', '♣3', '♠3', '♠7');
    expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('check that isTwoPair returns falsey if not two pair', () => {
    let hand = new Hand('♣J', '♣2', '♥2', '♦5', '♣7');
    expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});

test('check that isTwoPair returns 0 if not two pair', () => {
    let hand = new Hand('♣J', '♣2', '♥2', '♦5', '♣7');
    expect(CompareHands.isTwoPair(hand)).toBe(0);
});

test('check that isTwoPair returns higher score for a two pair hand', () => {
    let hand1 = new Hand('♥T', '♦T', '♣3', '♠3', '♠7');
    let hand2 = new Hand('♣J', '♥J', '♥9', '♦9', '♣7');
    let hand1Score = CompareHands.isTwoPair(hand1);
    let hand2Score = CompareHands.isTwoPair(hand2)
    console.log("hand1Score", hand1Score);
    console.log("hand2Score", hand2Score);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});

