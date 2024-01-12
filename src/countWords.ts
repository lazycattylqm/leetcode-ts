

function countWords(words1: string[], words2: string[]): number {
    let map1:Map<string, number> = new Map<string, number>();
    let map2:Map<string, number> = new Map<string, number>();
    words1.forEach((word) => {
        map1.set(word, map1.get(word) + 1 || 1);
    });

    words2.forEach((word) => {
        map2.set(word, map2.get(word) + 1 || 1);
    });

   map1.forEach((value, key) => {
       if (value > 1) {
              map1.delete(key);
       }
   })

    map2.forEach((value, key) => {
        if (value > 1) {
            map2.delete(key);
        }
    })
    let res = 0;
    map1.forEach((value, key) => {
        if (map2.has(key)) {
            res++;
        }
    })
    return res;


};