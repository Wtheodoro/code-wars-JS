// Your goal in this kata is to implement a difference function,
// which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const arrayDiff = (a, b) => {
  if (!a.length) return a
  if (!b.length) return a
  
  return a.filter(x => !b.includes(x))
}

console.log(arrayDiff([1,2,2,2,3],[2]))
console.log(arrayDiff([], [4,5]))
console.log(arrayDiff([3,4], [3]))
console.log(arrayDiff([1,8,2], []))
console.log(arrayDiff([1,2,3], [1,2]))