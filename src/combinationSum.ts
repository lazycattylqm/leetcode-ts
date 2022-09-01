export default function combinationSum3(k: number, n: number): number[][] {
    let result: number[][] = [];
    let path: number[] = [];
    const length = k;
    const target = n;
    const calc = (start: number, sum: number): void => {
        if (path.length === length) {
            if (sum === target) {
                result = [...result, [...path]];

            }
            return
        }
        for (let i = start; i <= 9; i++) {
            path.push(i)
            calc(i + 1, sum + i)
            path.pop()
        }
    }
    calc(1, 0)
    return result;
};