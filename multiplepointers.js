//create pointers or values that correspond to an index or position and move toward 
//the beginning, end or middle based on a condition.

//very efficient for solving problems with minimal space complexity as well. 

//linear structure like array or STRING 
//searching for a pair that meet a condition  OR searching for something that 
//meets a condition 

//use 2 references 2 numbers and work towards each other

[-4, -3, -2, -1, 0, 1, 2, 5]

"alkgsnmb"

//exameple:

//write a function calledx sumZero which accepts a sorted array of integers. The function 
//should find the first pair where the sum is 0. Return an array that 
//includes both values that sum to zero or undefined if a pair does not exist

sumZero([-3,-2,-1,0,1,2,3]) // return [-3, 3]
sumZero ([-2,0,1,3]) //return undefined 
sumZero([1,2,3]) // return undefined 

 function sumZero(arr) {
     for (let i = 0; i < arr.length; i++) {
         for (let j = i+1; j < arr.length; j++) {
             if (arr[i] + arr[j] === 0) {
                 return [arr[i], arr[j]]
             }
         } 
     }
 }
 //time o(n squared)
 //space o(1)

 sumZero([-4,-3,-2,-1,0,1,2,5])

 // with multiple pointers :::::

 function sumZero(arr) {
     let left = 0
     let right = arr.length - 1
     while (left < right) {
         let sum = arr[left] + arr[right]
         if (sum === 0) {
             return [arr[left], arr[right]]
         } else if (sum >  0) {
             right --
         } else {
             left++
         }

     }
 }

sumZero([-4, -3, -2, -1, 0, 5, 10])

//example:

//implement a function called countUniqueValues which accepts 
//a sorted array and counts the unique values in the array
// there can be negative numbers in the array but it will 
//always be sorted

function countUniqueValues(arr) {

}
countUniqueValues ([1,1,1,1,1,1,2]) //return 2

//compare the two values start with the first 2

//coding example challenge

//implement a function called countUniqueValues which accepts a soprted aeeay
// and counts the unique values in the array. There can be 
//negative numbers in the array, but it will always be sorted 

countUniqueValues([1,1,1,1,1,2]) // return 2
countUniqueValues([1,2,3,4,4,7,7,12,12,13]) //return 7
 
function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0
    }
    var i = 0
    for (var j = 1; j < arr.length; j++) {
        //compare index of i and index of j
        if (arr[i] !== arr[j]) {
            i++; 
            arr[i] = arr[j]
        }
        console.log( i,j)
    }
    return i+1
}
countUniqueValues([1,1,2,3,3,4,5,6,6,7])

//this will be o(n)
