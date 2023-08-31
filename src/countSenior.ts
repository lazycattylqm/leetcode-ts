function countSeniors(details: string[]): number {
    return details.map(v => v.substring(11, 13)).map(v => Number(v)).filter(v => v > 60).length;;

};