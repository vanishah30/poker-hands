const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isOnePair returns truthy is one pair', () => {
    let hand = new Hand('♥10', '♦10', '♣4', '♠3', '♠7');
    expect(CompareHands.isOnePair(hand)).toBeTruthy();
});

test('check that isOnePair returns falsey if not oen pair', () => {
    let hand = new Hand('♣5', '♣6', '♥J', '♣8', '♣7');
    expect(CompareHands.isOnePair(hand)).toBeFalsy();
});