function countPairs(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let count = 0;
    let  left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum >= target) {
            right--;
        } else {
            count += right - left;
            left++;
        }
    }

    return count;
};