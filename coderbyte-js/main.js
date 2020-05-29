//MONDAY, 7/18/16

//#1
/*Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function firstReverse(str) {
    newStr = str.split('').reverse().join('');
    return newStr;
}
firstReverse('test string');

//#2
/*Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
Sample Test Cases
Input:"hello*3"
Output:"Ifmmp*3"
Input:"fun times!"
Output:"gvO Ujnft!"*/
function letterChanges(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var newStr = '';
    var position;
    for (var i = 0; i < str.length; i++) {
        position = alphabet.indexOf(str[i]);
        if (position === 25) {
            newStr = newStr + 'a';
        } else if (position === -1) {
            newStr = newStr + str[i];
        } else {
            newStr = newStr + alphabet[position + 1];
        }
    }
    return newStr.replace(/[aeiou]/g,
        function(letter) {
            return letter.toUpperCase()
        });
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp


//THURSDAY, 7/21/16

//#3
/*Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4,
return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.
Sample Test Cases
Input:4
Output:24
Input:8
Output:40320*/
function firstFactorial(num) {
    if(num === 0) {
        return 1;
    }
    while (num >= 1) {
        return (num * firstFactorial(num-1));
    }
}

//#4
/*Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000.
Sample Test Cases
Input:12
Output:78
Input:140
Output:9870*/
function simpleAdding(num){
    if (num < 0) {
        return 'Please enter a number greater than 0';
    }
    if (num === 1) {
        return 1;
    }
    while (num >= 1) {
        return (num + simpleAdding(num - 1));
    }
}


//SATURDAY, 10/15/16

//#5
/*Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
Sample Test Cases
Input:"hello world"
Output:"Hello World"
Input:"i ran there"
Output:"I Ran There"*/
function LetterCapitalize(str) {
  str = str.replace(/\b[a-z]/g, function(letter){
    return letter.toUpperCase();
  });
  return str;
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

//#6
/*Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be compos ed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.
Sample Test Cases .

Input:"+d+=3=+s+"
Output:"true"

Input:"f++d+"
Output:"false"*/
function SimpleSymbols(str) {
  var result = JSON.stringify(true);
  for(var i = 0; i < str.length; i++){
    if(str[i+1] != '+' && str[i-1] != '+' && str[i] >= 'a'){
      result = JSON.stringify(false);
      }
    }
    return result;
  }
};
var test = "+d+=3=+s+";//true
var test2 = "f++d+";//false
console.log(SimpleSymbols(test2));
/*
var simpleSymbols = function (s) {
    for (var i = 0, length = s.length; i < length; i++) {
        if ( s[i] >= 'a' && s[i - 1] != '+' && s[i + 1] != '+' ) {
            return false;
        }
    }
    return true;
}*/
