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