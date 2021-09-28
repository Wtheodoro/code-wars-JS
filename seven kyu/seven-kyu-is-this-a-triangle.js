// Implement a method that accepts 3 integer values a, b, c.
// The method should return true if a triangle can be built with
// the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  const orderedNumbers = [a, b, c].sort((a,b) => a - b)

  if([a, b, c].includes(0)) return false

  if(orderedNumbers[0]+orderedNumbers[1] >= orderedNumbers[2]) return true

  return false
}

console.log(isTriangle(1, 2, 2))


// NOT MINE SOLUTION but 1000x better
function isTriangleNotMine(a, b, c) {
  [a, b, c] = [a, b, c].sort((x,y) => x - y)

  return a + b > c
}
