const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isHighestCard returns truthy is highest', () => {
    let hand = new Hand('♠K','♣J', '♥5', '♦3', '♣2');
    expect(CompareHands.isHighestCard(hand)).toBeTruthy();
});



test('check that isHighestCard returns a higher score for a stronger hand', () => {
    let hand1 = new Hand('♠K', '♣J', '♥5', '♦3', '♣2');
    let hand2 = new Hand('♦T', '♦9', '♦5', '♦7', '♦3');
    let hand1Score = CompareHands.isFlush(hand1);
    let hand2Score = CompareHands.isFlush(hand2);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});