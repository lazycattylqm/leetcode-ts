function permuteUnique(nums: number[]): number[][] {
    const length = nums.length;
    let result: number[][] = [];
    const visited: boolean[] = new Array(length).fill(false);
    let path: number[] = [];
    const inputNums = nums.sort((a, b) => a - b);
    const backtrack = (index: number) => {
        if (index == length) {
            result = [...result, [...path]];
            return
        }
        for (let i = 0; i < length; i++) {
            if (visited[i]) {
                continue
            }
            if (i > 0 && inputNums[i] == inputNums[i - 1] && !visited[i - 1]) {
                continue
            }
            visited[i] = true
            path = [...path, inputNums[i]];
            backtrack(index + 1);
            visited[i] = false
            path.pop();
        }

    }

    backtrack(0)

    return result;
}

export default permuteUnique;