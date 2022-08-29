"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shuffle_1 = __importDefault(require("./shuffle"));
const numbers = shuffle_1.default([2, 5, 1, 3, 4, 7], 3);
console.log(numbers);
console.log(shuffle_1.default([1, 2, 3, 4, 4, 3, 2, 1], 4));
console.log(shuffle_1.default([1, 1, 2, 2], 2));
//# sourceMappingURL=app.js.map