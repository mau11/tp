//FRIDAY, 7/22/16

//#1
//problem from codewars but did not submit
/*The word i18n is a common abbreviation of internationalization the developer community use instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.
Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation following the same rules.
Notes:
A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t-r2e").*/
function abbreviate(string) {
  var newString = string.replace(/-/g, ' ').split(' ');
  var arrayOfWords = [];
  for (var i = 0; i < newString.length; i++){
    var first = (newString[i])[0];
    if(newString[i].length >= 0) {
      var number = newString[i].length - 2;
    } else { 
      var number = 0;
    };
    var last = (newString[i])[newString[i].length-1];
    var words = first + number + last;
    arrayOfWords.push(words);
  }
  return arrayOfWords.toString().replace(/,/g, ' ');
}

var str = 'hello my name is mau-reen';
abbreviate(str); 
//returns => 'h3o m0y n2e i0s m1u r2n'
//needs to return => 'h3o m0y n2e i0s m1u-r2n', 
//***will still work on this