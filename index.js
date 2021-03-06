
// console.log()

// ---------------------------------------------------------------------------------

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents. 

function power(base, expo) {
  if (expo === 0) return 1;
  
  return base * power(base, expo -1)
}

// console.log(power(2, 10))

// ---------------------------------------------------------------------------------

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is equal to 24, because 4*3*2*1 equals 24. factorial (0!) is always 1.

function factorial(fact) {
  if (fact === 1 || fact === 0) return 1;

  return fact * factorial(fact - 1)
}

// console.log(factorial(3))

// ---------------------------------------------------------------------------------

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  if (arr.length === 1) return arr[0]

  
  return arr[0] * productOfArray(arr.slice(1))
}

// console.log(productOfArray([1, 2, 3, 10]))

// ---------------------------------------------------------------------------------

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.

function recursiveRange(num) {
  if (num === 0) return 0

  return num + (recursiveRange(num - 1))
}

// console.log(recursiveRange(10))

// ---------------------------------------------------------------------------------

// Write a recursive function called fib which accepts and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(seq, sum=1, prevSum=0) {
  if (seq === 1) return sum
  return fib(seq-1, sum+prevSum, sum)
}

// fib(4), output: 3
// fib(10), output: 55
// console.log(fib(30))

// ---------------------------------------------------------------------------------

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverseString(str) {
  if (str.length === 1) return str
  return str[str.length-1] + reverseString(str.slice(0, str.length-1))
}

console.log(reverseString("awesome"))

// ---------------------------------------------------------------------------------

