// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers.
// The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives


// TODO: TRATAR QUANDO A E B NAO TEM O MESMO LENGTH
const add = (a, b) => {
  const numOne = [...a].reverse()
  const numTwo = [...b].reverse()

  let nextSum = '0'

  const sum = numOne.map((num, index) => {
    const indexSum = Number(num) + Number(numTwo[index])
  
    if (index === numOne.length - 1) {
      return String(indexSum + Number(nextSum))
    }

    const sumToRetorn = String(indexSum + Number(nextSum)).slice(-1)

    nextSum = indexSum > 9 ? String(indexSum).slice(0, 1) : '0'

    return sumToRetorn
  })

  return sum.reverse().join('')
}

console.log(add('1', '1'))
console.log(add("123", "456"))
console.log(add('63829983432984289347293874', '90938498237058927340892374089'))
console.log(add('6379', '5543'))