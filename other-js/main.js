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


//Write a function numberOfWins using reduce, based on the following example:


function numberOfWins(str) {
  array = str.split('');
  return reduce(array, function(x,y){
      x[y] = x[y] + 1;
      return x;
  }, {L: 0, W: 0});
}

numberOfWins('LWLWLWWWLLWW');  // => {L: 5, W: 8};


//Thursday, 1/26/17
//#2

/*H-Tree Construction

Construct an H-tree, given its center (x and y coordinates), starting_length and depth. You can assume that you have a drawLine method.

As a reminder, this is an example of an H-tree (https://en.wikipedia.org/wiki/H_tree#/media/File:H_tree.svg)

How to construct an H-tree?

An H-tree can be constructed by starting with a line segment of arbitrary length, drawing two segments of the same length at right angles to the first through its endpoints, and continuing in the same vein, reducing (dividing) the length of the line segments drawn at each stage by √2.

Hints & Tips
If your peer cannot come up with a solution, ask them to analyze the image and see if they recognize a pattern.

Try to direct them towards a recursive approach (since you need to make the same pattern again and again).

The key here is to compute the coordinates of the new points. If your peer is struggling with calculating the new point, make sure they are in the right direction.

Try to give them some inputs regarding the base class of the recursion. Also keep a check on how they are updating the value of depth and length.

Creating an object for a point is a good practice. Encourage your peer to do that.

Solution
We will start from the center point. Compute the coordinates of the 4 tips of the H. Then we shall draw the 3 line segments of the H, i.e. left and right vertical of the H, and the connection of the two vertical segments. We will update the length and recursively draw 4 half-size H-trees of order one less than the current depth.

Pseudocode:*/
function drawLine(xOne, yOne, xTwo, yTwo):
// draws line, assume implementation available

function drawHTree(x, y, length, depth):

  if (depth == 0) return

  x0 = x - length/2
  x1 = x + length/2
  y0 = y - length/2
  y1 = y + length/2

  // draw the 3 line segments of the H-Tree
  drawLine(x0, y0, x0, y1)
  drawLine(x1, y0, x1, y1)
  drawLine(x0,  y, x1,  y)

  newLength = length/√2

  drawHTree(x0, y0, newLength, depth-1) // lower left  H-tree
  drawHTree(x0, y1, newLength, depth-1) // upper left  H-tree
  drawHTree(x1, y0, newLength, depth-1) // lower right H-tree
  drawHTree(x1, y1, newLength, depth-1) // upper right H-tree

Runtime Complexity: Every call of drawHTree invokes 9 expressions of O(1) and 4 calls of drawHTree until depth (denoted as D) reaches 0, therefore T(D) = 9 + 4 * T(D-1), meaning T(D) = O(4^D), where T is the time complexity function and D is the depth of the H-Tree.

Space Complexity: Recursive calls will add overhead since we store recursive calls in the execution stack. The space occupied in the stack will be O(D) in the worst case scenario. The stack space occupied will be no more than O(D) since a sibling drawHTree will not called before the current one being executed returns (i.e. finishes its execution).





//FRIDAY, 2/3/17

//#3

Quad Combination

Given an array of numbers arr and a number S, find 4 different numbers in arr that sum up to S.

Write a function that gets arr and S and returns an array with 4 indices of such numbers in arr, or null if no such combination exists.
Explain and code the most efficient solution possible, and analyze its runtime and space complexity.

Hints & Tips
The array is not sorted, and may hold any real number (positive, negative, zero, integer or fraction)

Any solution of more than O(n2) is not efficient enough. Please rate your peer feedback accordingly.

If you peer can't even think of the naive solution, ask how can you check all numbers in arr to come up with a solution.

If your peer can't improve the naive solution, ask how can you use a pre-computation to save some work and improve efficiency. If that doesn't help, ask how would a list of all pairs by their sum help to solve, and then ask how can such a list be calculated and stored.

Make sure that your peer's solution handles the case in which pairSum == S-pairSum correctly.

Solution
The naive solution is to iterate on every possible combination of 4 numbers from arr until the required combination if found. Using 4 nested loop involves O(n4) time complexity and O(1) space complexity. This is quite inefficient.

We can do better, if we look at all the pairs in arr, and then try to build the sum S from 2 different pairs.
First, we iterate over all the possible pairs in arr with 2 nested loops and hash each pair by its sum. Then, for each pairSum in the pairs hash table, we look for its complement S - pairSum. When we find two pairs that sum up to S, we need to check that these pairs are drawn from 4 different indices in arr (in other words: that no number is used twice to reach the desired sum).

function findArrayQuadCombination(arr, S):
   if (arr == null OR S == null):
      return null
   n = length(arr)
   if (n < 4):
      return null
   # hashing implementation language dependent:
   pairHash = new HashTable()
   for i from 0 to n-1
      for j from i+1 to n-1
         if !pairHash.isMapped(arr[i]+arr[j]):
            pairHash.map(arr[i]+arr[j], [])
         pairHash.get(arr[i]+arr[j]).push([i, j])

   for pairSum in pairHash.getKeys()
      if pairHash.isMapped(S - pairSum):
         pairsA = pairHash.get(pairSum)
         pairsB = pairHash.get(S - pairsSum)
         combination = find4Uniques(pairsA, pairsB)
         if (combination != null):
            return combination
   return null

# Helper function.
# Gets 2 arrays of sub-arrays of 2 numbers
# Gets 4 unique numbers, from 2 sub-arrays of different arrays
function find4Uniques(A, B):
   lenA = length(A)
   lenB = length(B)
   for i from 0 to lenA-1:
      for j from 0 to lenB-1:
         if ( A[i][0] == B[j][0] OR A[i][1] == B[j][1] OR
              A[i][0] == B[j][1] OR A[i][1] == B[j][0] ):
            continue
         else:
            return [A[i][0], A[i][1], B[j][0], B[j][1]]
   return null

Time Complexity: Let n be the length or arr. Hashing all pairs in arr by their sum and iterating over all sums and their complements takes O(n2) time (n2 pairs and constant number of actions for each). Uniqueness check for all indices of the pairs of sums that adds up to S until a valid combination is found, is also O(n2) (checking at most n2 pairs with 4 comparisons for each). Overall: quadratic O(n2) time complexity.

Space Complexity: n2 pairs have up to n2 different sums. Hashing them takes O(n2) space complexity.













isValid, str () {} [],
output - true/false
input - str
"dog()" true, (cat[])- true, ((())) true, [[{]}] false

function isValid(str){
  //create arr
  //store each str val in arr
  //create obj, store count
    var obj = {
    "]":"[",
    ")": "(",
    "}": "{"
    }
  //iterate through arr
    // check if sym & open
    // if closed, check prev, lookup obj
       // remove the open & closed
  //return boolean
}

------------------------------------------------------
//Insertion Sort
//Output: ordered version of the input array
//Input: array of objects that contains value (and maybe an order if there are multiple of the value
//Constraints:
//Edge cases:
  //[] => return []
  //[{value: 10}] => return [{value: 10}]

//examples
// [{value: 5, order: 2}, {value: 10}, {value: 5, order: 1}] => [{value: 5, order: 1}, {value: 5, order : 2}, {value: 10}]

function insertionSort(array) {
  //for each item in the input array start at index 1
  for (var i = 1; i < array.length; i++) {
    //for each item in the subset array of indices before current index
    for ( var k = 0; k < i; k++) {
      //check if current item in input array is less than the current subset item
      if(array[i].value < array[k].value) {
        //if yes, insert the current input array item before this current subset item
        array.splice(k, 0, array[i]);
        //remove the input array item
        array.splice(i, 1);
        //break the subset loop\
      } else if (array[i].value === array[k].value) {
        if (array[i].order < array[k].order) {


      }
    }
  }
  //return array

  return array

}









