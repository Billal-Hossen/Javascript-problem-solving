// Write a function to get large word from string.

function findLageWord(str) {
  let arrayStr = str.split(' ')
  let largeWord = arrayStr[0]
  for (let i = 1; i < arrayStr.length; i++) {
    if (arrayStr[i].length > largeWord.length) {
      largeWord = arrayStr[i]
    }
  }
  return largeWord
}

console.log(findLageWord("My country name is Bangladesh."))