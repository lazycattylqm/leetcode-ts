import allPathsSourceTarget from "../src/allPathsSourceTarget"

describe( 'test all path', () => {
  test( 'case 1', () => {
    const result = allPathsSourceTarget( [[1, 2], [3], [3], []] )
    console.log( result )
  } )
} )