// a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't',
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character,
// but the function should return the correct case for the initial letter. For example,
// the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters,
// it should return an empty string ("") or None -- see sample tests.

const firstNonRepeatingLetter = (s) =>{
  const splitedString = [...s]
  
  const nonRepeatArr = splitedString.map((str) => {
    const howManyOfTheSame = splitedString.filter(s => s.toLowerCase() === str.toLowerCase())
    if (howManyOfTheSame.length === 1) return str
  }).find(el => el !== undefined)

  return nonRepeatArr ? nonRepeatArr : ''
}

console.log(firstNonRepeatingLetter('a')) // a
console.log(firstNonRepeatingLetter('stress')) // 't'
console.log(firstNonRepeatingLetter('moonmEn')) // 'E'
