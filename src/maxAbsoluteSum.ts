export function maxAbsoluteSum(nums: number[]): number {
    const maxSum = getMaxSum(nums);
    const minSum = getMinSum(nums);
    return Math.max(Math.abs(maxSum), Math.abs(minSum));
};

function getMaxSum(nums: number[]): number {
  let max:number = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const number = nums[i];
    sum = Math.max(number, sum + number);
    max= Math.max(max, sum);
  }
  return max;
}

function getMinSum(nums: number[]): number {
  let min:number = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const number = nums[i];
    sum = Math.min(number, sum + number);
    min = Math.min(min, sum)
  }
  return min;
}