////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//i: 2 numbers
//o: returns the smaller number
//if same, return either
function min(a, b) {
//if a > b, return b
if (a > b){
  return b;
  //if a < b
} else if (a < b){
  // return a
  return a;
  //if a === b 
} else if (a === b){
  //return a
  return a;
}


}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//i: number
//o: boolean, true if even, false if odd
// use recursion
function isEven(num) {
  // down to basic: 0 is even, 1 is odd
    //if input is neither 0 or 1 and positive, call the function again at (num - 2)
    // should work on negative numbers, so if < 0, call at n + 2

  //if num is postive
    //if num === 0 
    if (num === 0){
    //return true
    return true;
    // if num is 1 or -1, return false
    } else if (num === 1 || num === -1){
      //return false
      return false;
      //else if num > 1 (hasnt finished recur. "loop") pos
    } else if (num > 1){
      //return function call at num - 2
      return isEven(num - 2);
      //else if num < -1 (hasnt finished recur. "loop") neg
    } else if (num < -1){
      //return function call at num + 2
      return isEven(num + 2);
    }
 
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//i: string, string character
//o: number
//returns number of times string char occurs in string 
function countChars(string, char) {
  //make counter variable
  let counter = 0;
  //loop over string
  for (let i = 0; i < string.length; i++){
    //if string index value is char
    if (string[i] === char){
      //add 1 to counter
      counter += 1;
    }
  }
  //return counter
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//i: string
//o: number, number of B's in string
function countBs(string) {
  //counter variable
  let counter = 0;
  //loop over string 
  for (let i = 0; i < string.length; i++){
    //if string index value is "B"
    if (string[i] === "B"){
      //add one to counter
      counter += 1;
    }
  }
  //return counter
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};