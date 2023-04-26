const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that checkDouble returns truthy if it is not contain double cards', () => {
    let hand1 = new Hand('♥4', '♦4', '♣3', '♠7', '♠8');
    let hand2 = new Hand('♥6', '♦6', '♥2', '♣T', '♣k');
    expect(CompareHands.checkNotDuplicate(hand1, hand2)).toBeTruthy();

});

test('check that checkDouble returns falsy if it is contain double cards', () => {
    let hand1 = new Hand('♥4', '♦4', '♣3', '♠7', '♠8');
    let hand2 = new Hand('♥6', '♦6', '♥2', '♠8', '♣k');
    expect(CompareHands.checkNotDuplicate(hand1, hand2)).toBeFalsy();

});

test('check that checkDouble returns falsy if it is contain double cards', () => {
    let hand1 = new Hand('♥4', '♦4', '♣3', '♠7', '♠7');
    expect(CompareHands.checkNotDuplicate(hand1)).toBeFalsy();

});
