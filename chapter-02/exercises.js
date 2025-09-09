
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(x) {
  //while i <= x, print "#". 
  //starting with 1 "#"
  var i = 1;
  //variable to add to each time and print
  var hash = "";
  //while i <= input x
  while (i <= x){
    //add a # to hash each time
    hash += "#"
    //print hash each time
    console.log(hash);
    //keep going until i > x
    i++;
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  // start, end are numbers
  //div by 3 log "fizz"
  //div by 5 log "buzz"
  //div by 3 and 5 log "fizzbuzz"
  //else log the number
  // for loop from start to end
  for (var i = start; i <= end; i++){
    //if divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0){
      //print fizzbuzz
      console.log("fizzbuzz");
      //else if div by 3
    } else if (i % 3 === 0){
      //print fizz
      console.log("fizz");
      //else if div by 5
    } else if (i % 5 === 0){
      //print fizzbuzz
      console.log("buzz");
      //else print the number
    } else {
      console.log(i);
    }
  }
  

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

function drawChessboard(x) {
  //one line is " # " and next is "#  #" ... for example
  //input number is the length of each line AND the number of lines
  
  //loop from 0 to input num x
  //variable for each line 
  var line = "";
    //line access
  for (var i = 0; i < x; i++){
    //character access. looping over the same line as abone
    for (var c = 0; c < x; c++){
      //line index + char index (two consecutive line indexes) is even
      if ((i + c) % 2 === 0){
        // then a space is added to line
        line += " "; //so very first char is a space bc 0+0 is even (good)
        //else if 2 consec indexes added together is odd
      } else {
        //then # is added to line
        line += "#"; //now need to add line break after each
      }
    }
    /*adding line break outside of nested loop and in outer loop 
      since we need line break after each line, which is what the outer 
      loop was initially created for */
    line += "\n";
  }
  console.log(line); 
  }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}