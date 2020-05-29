// #1
/* Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
const getMultiples = (num) => {
  let sum = 0
  for(let i = 0; i < num; i++){
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  console.log('RESULT:', sum)
}

getMultiples(1000) // RESULT: 233168
