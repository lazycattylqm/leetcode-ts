import nearestValidPoint from "../src/nearestValidPoint";

describe('nearest Valid Point', function () {
    test('nearest valid point', function () {
        expect(nearestValidPoint(3, 4, [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]])).toBe(2);
    })
});