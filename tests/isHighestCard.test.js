const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isHighestCard returns truthy is highest', () => {
    let hand = new Hand('♠K', '♣J', '♥5', '♦3', '♣2');
    expect(CompareHands.isHighestCard(hand)).toBeTruthy();
});


test('check that isHighestCard returns a higher score for a stronger hand', () => {
    let hand1 = new Hand('♠K', '♣J', '♥5', '♦3', '♣2');
    let hand2 = new Hand('♦T', '♦4', '♠5', '♦7', '♦3');
    let hand1Score = CompareHands.isHighestCard(hand1);
    let hand2Score = CompareHands.isHighestCard(hand2);
    console.log("hand1Score", hand1Score);
    console.log("hand2Score", hand2Score);
    expect(hand1Score).toBeGreaterThan(hand2Score);
});

