
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
  
}