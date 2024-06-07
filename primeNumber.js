// Write a function to check number is prime or not.

function checkPrimeNumber(num) {
  let prime = true

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      prime = false
      break;
    }
  }
  if (prime) {
    return "Number is prime number."
  } else {
    return "Number is not prime number."
  }
}

console.log(checkPrimeNumber(20))