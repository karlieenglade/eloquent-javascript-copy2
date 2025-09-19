////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//i: 2 numbers, 1 optional number <step>
//o: returns array of input numbers. step is 1 by default. but if given, skip by <step> in output array
    // for example: range(1,5) --> [1, 2, 3, 4, 5] // range(1, 5, 2) --> [1, 3, 5] <-- skip/step by 2
function range(x, y, step = 1, output=[]) {
  //base case if either is 1 number away from the other or are the same. or if step is negative
  if (x === y || step < 1){
    //return output array
    return output;
  }
  //recursion
  //if x < y  
  if (x < y){                              // 1,5   true. 1st iteration
  //push x into output array
  output.push(x);                           //pushing 1 into output. 1st iteration
  //if x plus step is greater than or equal to y   (1,5,2) --> 3>=5 --> false. 1st iteration
  if (x + step >= y){
    //then push y into output
    output.push(y);                         // so y is NOT pushed into output at 1st iteration
    // return output;
  }
    //return func at x plus step, y, step, output        
  return range(x+step, y, step, output);     //keeps adding x+step until x >= y and y pushed into output
  }
  //if x > y    
  if (x > y){
  //push y-1 into output array
  output.push(x);
  //if x minus step is <= y
  if (x - step <= y){
    //then push y into output
    output.push(y);
    // return output;
  }
  //return func at x minus step, y, step, output 
  return range(x-step, y, step, output);   // keeps subtracting x-step until <-- is <= y so that y gets pushed into output
  }

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//i: array
//: number, sum of all numbers (index values added together)
function sum(array, output=0) {
  //base
  if (array.length === 0){
    return output;
  }
  //recursion
  //adding array index value to output at each iteration
  output += array[0];
  //return func at array sliced
  return sum(array.slice(1), output);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array, output=[]) {
//base
//if array length is 0
if (array.length === 0){
  //return output array
  return output;
}
//recursion
//unshift each element into output array so that order is reversed
output.unshift(array[0]);
//return func array sliced
return reverseArray(array.slice(1), output);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //loop over half of <array> using Math.floor
  for (let i = 0; i < Math.floor(array.length / 2); i++){
    //creating local variable ofVal to hold array value at each iteration
      //assigning ogVal to the original array's index value 
    let ogVal = array[i]; // local binding. what I was missing at first
    //then assigning the array value at index array.length-1-i into current index array[i]
    array[i] = array[array.length-1-i];
    //then storing ogVal to array[array.length-1-i]
    array[array.length-1-i] = ogVal; // local binding in action ^ 
  }
//returing the modified array
return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//i: array
//o: object list { list: rest {} }
function arrayToList(array) {
  //variable for list. last list is null since no index after last value
  let list = null;
  //loop over array backwards so start with innermost nested portion of list
    // building outwards
  for (let i = array.length-1; i >= 0; i--){
    //assigning list to object with "value" key with value of current array value, array[i]
                        // and with "rest" key with value of list (loop continues out here)
    list = { value: array[i], rest: list};
  }
  //return list (object)
  return list;

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//i: a list object
//o: array
  // opposite of last func
function listToArray(list) {
  //making array for output
  let array = [];
  //looping over list 
    //start: at the list (beginning)
      //stop: when node is no longer a thing (when it is null)
        //update: continuing to the next node at each iteration. reassigning node to "rest"
            // "rest" is the second prop of each object that contains next nested object(s)
  for (let node = list; node; node = node.rest) {
    //push each node.value value into output array
    array.push(node.value);
  }
  //return array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//i: value. list
//o: updated list object, with value as first 
// adds <value> to beginning of list, before all other elements
function prepend(value, list) {
  // return object 
    //<value> is new key with propery of the input value, 
      // <list> is the net prop on new outer list element. contains further nested objs aka og <list>
  return { value, rest: list };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//i: list and a number
//o: returns the value of the <number> representing the index in list
// noth(arrayToList([1, 2, 3]), 0) // ---> 1
function nth(list, number) {
  //if no list
  if (!list){
    //return undefined
    return undefined;
  }
  //if number is 0 
  if (number === 0){
    //return list value (first (only/last - if last iteration) list value)
    return list.value;
  }
  //recursion
  //return func at rest of list, n-1
  return nth(list.rest, number-1);

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//i: 2 objects
//o: boolean, true if identical. false if not
// objects and arrays are inherently unique, even with exact same contents
  // but i need to return true if contents match, or even if input is {} and {}
  // should also work for numbers and truthy values
  // what about the innermost rest value null ? *****
function deepEqual(thing1, thing2) {
  //for nums, booleans, strings, etc. : if thing1 === thing2 return true
  if (thing1 === thing2){
    return true;
  }
  //if either thing1 or thing2 is null or not typeof object, return false
  if (thing1 === null || thing2 === null || typeof thing1 !== "object" || typeof thing2 !== "object"){
    return false;
  }
  
  //now, must be object typeof. so compare properties
  // can start by weeding out if different number of keys
    // Object.keys() returns array of key names in object
    let keysArray1 = Object.keys(thing1); //array of thing1's keys
    let keysArray2 = Object.keys(thing2); //array of thing2's keys
    //now compare lengths. if not equal, return false
    if (keysArray1.length !== keysArray2.length){
      return false;
    }
    //now we have left 2 objects with same number of keys. time to compare them
    //loop over array of keys, keysArray1
    for (let key of keysArray1){
    //if keysArray2 does not include key (key is in keysArray1)
    if (!keysArray2.includes(key)){
      //return false
      return false;
    }
    //then, within the loop use func call on deepEqual at thing1[key], thing2[key] <-- compares string values
      //if func call is false, will return false. if true, will return true;
      return (deepEqual(thing1[key], thing2[key]));
    }
    
    return true; // need this for {} === {} to return true

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};