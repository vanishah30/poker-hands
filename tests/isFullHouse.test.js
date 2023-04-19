const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isFullHouse returns truthy is three of a kind', () => {
    let hand = new Hand('♥Q', '♦Q', '♣Q', '♠10', '♠10');
    expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

test('check that isFullHouse  returns falsey if not flush', () => {
    let hand = new Hand('♣7', '♣6', '♥9', '♣8', '♣7');
    expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});