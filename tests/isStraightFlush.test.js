const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that StraightFlush returns truthy is straight flush', () => {
    let hand = new Hand('♥T', '♥9', '♥8', '♥7', '♥6');
    expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
});

test('check that StraightFlush  returns falsey if not straight flush', () => {
    let hand = new Hand('♣7', '♣6', '♥4', '♣8', '♣7');
    expect(CompareHands.isStraightFlush(hand)).toBeFalsy();
});