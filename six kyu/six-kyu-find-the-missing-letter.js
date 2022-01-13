// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters
// as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing.
// The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

const findMissingLetter = (array) => {
  const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  const isLowerCase = array[0] === array[0].toLowerCase()

  const openWindow = [...englishAlphabet].findIndex(letter => letter === array[0].toLowerCase())
  const arrayToCompate = [...englishAlphabet].slice(openWindow, (openWindow + array.length+1))

  const missinLetter = arrayToCompate.find(letter => !array.includes(isLowerCase ? letter : letter.toUpperCase()))

  return isLowerCase ? missinLetter : missinLetter.toUpperCase()
}

console.log(findMissingLetter(['a','b','c','d','f']))
console.log(findMissingLetter(['A','B','C','D','F']))
console.log(findMissingLetter(['O','Q','R','S']))
console.log(findMissingLetter(['o','q','r','s']))


// NOT MINE

function findMissingLetter_NOT_MINE(array)
{
   var i=array[0].charCodeAt(); // this returns a number
   array.map(x=>  x.charCodeAt()==i?i++:i);
   return String.fromCharCode(i); // this returns a string related with charCode number
}