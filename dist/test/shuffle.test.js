"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shuffle_1 = __importDefault(require("../src/shuffle"));
test('temp jest', () => {
    console.log('temp jest');
    expect(1).toEqual(1);
});
describe('shuffle', () => {
    test('shuffle case 1', () => {
        expect(shuffle_1.default([2, 5, 1, 3, 4, 7], 3)).toEqual([2, 3, 5, 4, 1, 7]);
    });
    test('shuffle case 2', () => {
        expect(shuffle_1.default([1, 2, 3, 4, 4, 3, 2, 1], 4)).toEqual([1, 4, 2, 3, 3, 2, 4, 1]);
    });
    test('shuffle case 3', () => {
        expect(shuffle_1.default([1, 1, 2, 2], 2)).toEqual([1, 2, 1, 2]);
    });
});
//# sourceMappingURL=shuffle.test.js.map