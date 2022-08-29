import shuffle from "../src/shuffle";

test('temp jest', () => {
    console.log('temp jest');
    expect(1).toEqual(1);
})

describe('shuffle', () => {
    test('shuffle1', () => {
        expect(shuffle([2, 5, 1, 3, 4, 7], 3)).toEqual([2, 3, 5, 4, 1, 7]);
    })
})
