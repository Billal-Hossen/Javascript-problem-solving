// function checkPalindrome(str) {
//   let reverse = ""
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i]
//   }
//   if (str === reverse) {
//     console.log("String is palindrome.")
//   } else {
//     console.log("String is not Palindrome")
//   }

// }

// checkPalindrome("Hello World")

function checkPalindrome(str) {
  let value = str.length - 1
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[value]) {
      return "String is not palindrome."
    }
    value--
  }
  return "String is palindrome."
}

console.log(checkPalindrome("racecar"))