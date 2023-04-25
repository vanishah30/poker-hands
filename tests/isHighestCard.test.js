const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

/*test('Test that isHighestCard returns truthy is highest', () => {
    let hand = new Hand('♠K','♣J', '♥5', '♦3', '♣2');
    expect(CompareHands.isHighestCard(hand)).toBeTruthy();
});*/



test('check that isHighestCard returns a higher score for a stronger hand', () => {
    let hand1 = new Hand('♠K', '♣J', '♥5', '♦3', '♣2');
    let hand2 = new Hand('♦T', '♦4', '♠5', '♦7', '♦3');
    let hand1Score = CompareHands.isHighestCard(hand1);
    let hand2Score = CompareHands.isHighestCard(hand2);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});

test('check isHighestCard  score', () => {

    function getHandValue() {
        let hand1 = new Hand('♠K', '♣J', '♥5', '♦3', '♣2');
        let hand2 = new Hand('♦T', '♦4', '♠5', '♦7', '♦3');
        let hand1Value = getHandValue(hand1);
        let hand2Value = getHandValue(hand2);

        if (hand1Value > hand2Value) return { score: hand1Value };
        else if (hand2Value > hand1Value) return { score: hand2Value };
        else {
            return { score: hand2Value, hand: null };

        }
    }
});