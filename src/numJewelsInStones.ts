export function numJewelsInStones(jewels: string, stones: string): number {
    const reg = "[^" + jewels + "]";
    const re = new RegExp(reg, "g");
    return stones.replace(re, "").length;
};