import minOperations from "../src/minOperations";
describe('test minOperationsTest', function () {
    test('case 1',  () => {
        let result = minOperations("0100");
        expect(result).toBe(1);
    })
});