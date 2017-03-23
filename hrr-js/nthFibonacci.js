/*
nthFibonacci
Suppose a newly-born pair of iguanas, one male, one female, are put in a large aquarium. Iguanas are able to mate at the age of one month so that at the end of its second month a female can produce another pair of iguanas. Suppose that our iguanas never die and that the female always produces one new pair (one male, one female) every month from the second month on. How many pairs of iguanas will there be after n months?

For example, the iguana pair size for months zero through five are:
0 1 1 2 3 5
If n were 4, your function should return 3; for 5, it should return 5.

HINT: This iguana pattern is described exactly by the fibonacci sequence:

https://en.wikipedia.org/wiki/Fibonacci_number

Write a function that accepts a number n and returns the number of iguana pairs after n months.
*/

var nthFibonacci = function(n){
  // iggies at age 0 or 1 only matter
  var totalIggies = [0, 1];
  // starting at age 1, iggies can have a pair
  for(var i = 1; i < n; i++){
    totalIggies.push(totalIggies[i - 1] + totalIggies[i]);
  }
  return totalIggies[n];
};
