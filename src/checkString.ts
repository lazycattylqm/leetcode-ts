export function checkString(s: string): boolean {
    let res:number = 0;
    let mark:String = "a";
    for (let sElement of s) {
        if (sElement !== mark) {
            res += 1;
            mark = sElement;
        }
        if (res >= 2) {
            return false;
        }
    }
    return true

};