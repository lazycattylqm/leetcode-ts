"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shuffle(nums, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result[i * 2] = nums[i];
        result[i * 2 + 1] = nums[n + i];
    }
    return result;
}
;
exports.default = shuffle;
//# sourceMappingURL=shuffle.js.map