function minTaps(n: number, ranges: number[]): number {
    const dp: number[] = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        const left = Math.max(0, i - ranges[i]);
        const right = Math.min(n, i + ranges[i]);
        dp[left] = Math.max(dp[left], right);
    }
    let max = 0;
    let count = 0;
    let pre = 0;
    for (let i = 0; i < n; i++) {
        max = Math.max(max, dp[i]);
        if (pre === i) {
            pre = max
            count++;
        }
    }
    return pre >= n ? count : -1;
};