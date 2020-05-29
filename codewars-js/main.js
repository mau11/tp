//TUESDAY, 7/19/16

//#1
/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed(Just like the name of this Kata).Strings passed in will consist of only letters and spaces.Spaces will be included only when more than one word is present.
Examples:
    spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw"
spinWords("This is a test") => returns "This is a test"
spinWords("This is another test") => returns "This is rehtona test"*/
function spinWords(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            words[i] = words[i].split('').reverse().join('');
        }
    }
    return words.join(' ');
}

//#2
/*Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.
Let's assume that a song consists of some number of words. To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.
For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.
Input
The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters
Output
Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.
Examples
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND*/
var songLyrics = 'WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB';
function songDecoder(song){
  var lyrics = song.replace(/(WUB)+/g," ").trim();
  return lyrics;
}
songDecoder(songLyrics);


//MONDAY, 7/25/16

//#3
/*This kata is designed to test your ability to extend the functionality of built-in ruby classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
Explanation:
square() must return a copy of the array, containing all values squared, the original array must not be changed
cube() must return a copy of the array, containing all values cubed, the original array must not be changed
average() must return the average of all array values, average() on an empty array must return NaN
sum() must return the sum of all array values
even() must return an array of all even numbers, the original array must not be changed
odd() must return an array of all odd numbers, the original array must not be changed
Examples:
var numbers = [1, 2, 3, 4, 5];
numbers.square(); // must return [1, 4, 9, 16, 25]
numbers.cube(); // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum(); // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]*/
//will be using the existing methods but just for review, I'm defining each, map, reduce and filter
function each(collection, callback){
  if(Array.isArray(collection)){
    for(var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
  } else {
    for (var key in collection){
      callback(collection[key]);
    }
  }
}
function map(collection, transFunc){
  var results = [];
  if (!Array.isArray(collection)){
    results = {};
  }
  each(collection, function(value){
    results.push(value);
  });
  return results;
}
function reduce(collection, accumulator, startValue) {
  var result = startValue;
  each(collection, function(element) {
    result = accumulator(result, element);
  });
  return result;
}
function filter(array, testFunc) {
  var results = [];
  each(array, function(value, index) {
    if (testFunc(value, index) === true) {
      results.push(value);
    }
  });
  return results;
}
var numbers = [1, 2, 3, 4, 5];
// SQUARE
function squared(x){
  return x * x;
}
Array.prototype.square = function(){
  return this.map(squared);
};
// CUBE
function cubed(x){
  return x * x * x;
}
Array.prototype.cube = function(){
  return this.map(cubed);
};
// SUM
function summed(a, b){
  return a + b;
}
Array.prototype.sum = function(){
  return reduce(this, summed, 0);
};
// AVG
Array.prototype.average = function() {
  return this.sum() / this.length;
};

// EVEN
function evens(num){
  if(num % 2 === 0){
    return true;
  }
}
Array.prototype.even = function(){
  return this.filter(evens);
};
// ODD
function odds(num){
  if(!(num % 2 === 0)){
    return true;
  }
}
Array.prototype.odd = function(){
  return this.filter(odds);
}


//WEDNESDAY, 10/12/16

//#4
/*Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
The parameter of the function findNb (find_nb, find-nb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
Examples:
findNb(1071225) --> 45
findNb(91716553919377) --> -1*/
function findNb(m) {
  var vol = 0;
  var n = 1;
  while(vol < m){
    vol = vol + (n * n * n);
    if (vol === m) {
      return n;
    }
    n++;
  }
  return (-1);
}


//FRIDAY, 10/14/16

//#5
/*Welcome. In this kata, you are asked to square every digit of a number.
For example, if we run 9119 through the function, 811181 will come out.
Note: The function accepts an integer and returns an integer*/
function squareDigits(num){
  //create an array to store values
  var results = [];
  num = num.toString(); //convert to string to us split method
  //split numbers =>creates an array
  num = num.split('');
  //map through values to square
  var integer = num.map(function(value){
    return value * value;
  });
  //join values, convert to number
  results = Number(integer.join(''));
  //return number
  return results;
}


//SUNDAY, 11/13/16

//#6
/*Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:*/
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg

function toWeirdCase(string){
  var results = [];
  var strArray = string.split(' ');
  for(var i = 0; i < strArray.length; i++){//iterate over each word
    for(var j = 0; j < strArray[i].length; j++){
      console.log(strArray);
      if(j === 0){//first letter, always upper case
        var up = strArray[i][j].toUpperCase();
        results.push(up);
      } else if(j % 2 === 1){//odd
        var low = (strArray[i][j]).toLowerCase();
        results.push(low);
      } else {//even
        var up = strArray[i][j].toUpperCase();
        results.push(up);
      }
    }
  }
  return results.join(' ');
}
//does not work
