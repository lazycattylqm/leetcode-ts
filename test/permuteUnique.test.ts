import permuteUnique from "../src/permuteUnique";

describe('test permuteUnique', () => {
    test('case 1', () => {
        let unique = permuteUnique([1, 1, 2]);
        console.log(unique)
    })

    test('case 2', () => {
        let unique = permuteUnique([1, 2, 3]);
        console.log(unique)
    })
})