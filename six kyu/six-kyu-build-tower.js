// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// JavaScript: returns an Array;

// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

const towerBuilder = (nFloors) => {  
  const nFloorsArr = Array(nFloors).fill('')

  const tower = nFloorsArr.map((_, index) => {
    const howManyStars = 2*(index+1) - 1
    const stars = '*'.repeat(howManyStars)

    const howManyHalfSpaces = (nFloors - index) -1
    const halfSpaces = ' '.repeat(howManyHalfSpaces)

    return `${halfSpaces}${stars}${halfSpaces}`
  })

  return tower
}

console.log(towerBuilder(4))