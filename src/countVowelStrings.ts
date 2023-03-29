export default function countVowelStrings (n: number): number {

  let array = [1, 1, 1, 1, 1]
  let newArray = [1, 2, 3, 4, 5]

  if (n == 1) {
    return array.reduce((v1, v2, idx, arr) => {
      return v1 + v2
    });
  }

  if (n == 2) {
    return newArray.reduce((v1, v2, idx, arr) => {
      return v1 + v2
    });
  }

  for (let i = 1; i < n - 1; i++) {
    let tempArray = [];
    for (let j = 0; j < 5; j++) {
      const val = newArray.reduce((v1, v2, idx, arr) => {
        if (idx <= j) {
          return v1 + v2;
        }
        return v1;
      });
      tempArray[j] = val;
    }
    newArray = tempArray;

  }

  return newArray.reduce((v1, v2, idx, arr) => {
    return v1 + v2
  });



};