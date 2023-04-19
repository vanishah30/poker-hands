const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isTwoPair returns truthy is two pair', () => {
    let hand = new Hand('♥10', '♦10', '♣3', '♠3', '♠7');
    expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('check that isTwoPair returns falsey if not two pair', () => {
    let hand = new Hand('♣J', '♣2', '♥2', '♦5', '♣7');
    expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});