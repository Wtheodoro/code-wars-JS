// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(string) {
  const restString = string.toLowerCase().replace(/\s/g, '').split('')
  const capitalizedString = restString.map((letter, index) => {
    return `${letter.toUpperCase()}${letter.repeat(index)}`
  })
  const joinedString = capitalizedString.join('-')

  return joinedString
}

console.log(accum('Eles num guenta te ver livre, imagina te ver rei'))
