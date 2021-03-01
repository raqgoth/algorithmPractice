//- frequency counter
//- multiple pointers
//- sliding window 
//-divide and conquer
//-dynamic programming
//-greedy algortithms 
//-backtracking

//****frequency counter""""

//use an object to collect a bunch of values and freauencies to compare them
//frequencies of what things happen and how many time

//example:
//write a function called same 
//accepts two arrays
//the function should return true if every value in the array has its corresponding 
//value squared in the second array. the frequency of values must be the same.

same([1,2,3], [4,1,9]) //true 

same([1,2,3], [1,9]) //false

same([1,2,1], [4,4,1]) //false (must be the same frequency)

//naive solution
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i=0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] **2)
        if (correctIndex === -1) {
           return false 
        }
        arr2.splice(correctIndex,1) // loops over this array and says is this one squared or 2 squared
        //and then splice it to take it away of the array so that e know its shrinking 
        //deal with each item in the array
        return true
    } 
}