// Write a function to get the large element from array.

function findLageElement(arr) {
  large = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i]
    }
  }
  return large
}

console.log(findLageElement([10, 2, 11, 33, 100, 7, 10, 0, 99]))