// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a booleanand be case insensitive.
// The string can contain any char.
// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false




function XO(str) {
  const XAmount = [...str.toLowerCase()].filter((letter) => letter === 'x').length
  const OAmount = [...str.toLowerCase()].filter((letter) => letter === 'o').length
  return XAmount === OAmount
}

console.log(XO('xxxOo'))