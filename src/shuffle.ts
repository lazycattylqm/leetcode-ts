function shuffle(nums: number[], n: number): number[] {
    let result: number[] = [];
    for (let i = 0; i < n; i++) {
        result[i * 2] = nums[i];
        result[i * 2 + 1] = nums[n + i];
    }
    return result;
};

export default shuffle;