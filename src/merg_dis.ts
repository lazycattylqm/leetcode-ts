export function merge(intervals: number[][]): number[][] {
    let res :number[][] = [];
    intervals.sort((a, b) => a[0] - b[0]);
    let current = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const next = intervals[i];
        if (next[0] <= current[1]) {
            current[1] = Math.max(current[1], next[1]);
        } else {
            res.push(current);
            current = next;
        }

    }
    res.push(current);
    return res;
}