// Write a function for reverse the string

function reverseStr(str) {
  let reverseString = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i]
  }
  return reverseString
}

console.log(reverseStr("Hello World"))