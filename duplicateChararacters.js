function removeDuplicateCharacters(str) {
  let uniqueArr = []
  for (let i = 0; i < str.length; i++) {
    if (uniqueArr.indexOf(str[i]) == -1) {
      uniqueArr.push(str[i])
    }
  }

  return uniqueArr.join('')
}

console.log(removeDuplicateCharacters("Hello World"))