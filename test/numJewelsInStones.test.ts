import {numJewelsInStones} from "../src/numJewelsInStones"

describe('numJewelsInStones', function () {
   test('numJewelsInStones', function () {
       expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
   })
});