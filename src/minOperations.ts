function minOperations(s: string): number {
    let even: string[] = [];
    let odd: string[] = [];
    s.split("").forEach((char, index) => {
        if (index % 2 == 0) {
            even.push(char);
            return
        }
        odd.push(char);
    })

    return Math.min(opt(even, "0") + opt(odd, "1"), opt(even, "1") + opt(odd, "0"));

}

function opt(s: string[], target: string): number {
    let count = 0;
    s.forEach((char) => {
        if (char != target) {
            count++;
        }
    })
    return count;
}

export default minOperations;