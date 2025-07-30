export function longestSubarray(nums: number[]): number {
  let max = nums[0];
  let cnt = 1;
  let ans = 1;
  nums.forEach((num, index) => {
    if (num > max) {
      ans = cnt = 1;
      max = num;
    } else if (num < max) {
      cnt = 0;

    } else if (num === max) {
      cnt++;
    }
    ans = Math.max(ans, cnt);
  });

  return ans;

};