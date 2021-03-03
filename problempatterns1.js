//- frequency counter
//- multiple pointers
//- sliding window 
//-divide and conquer
//-dynamic programming
//-greedy algortithms 
//-backtracking

//****frequency counter******

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

//naive solution bc its 0(n squared)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i=0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] **2)
        if (correctIndex === -1) {
           return false 
        }
        console.log(arr2)
        arr2.splice(correctIndex,1) // loops over this array and says is this one squared or 2 squared
        //and then splice it to take it away of the array so that e know its shrinking 
        //deal with each item in the array
        
    } 
        return true
}
//index of: iterate the entire array 
same([1,2,3,2], [9,1,4,4])

//loop over each array one time 

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i=0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] **2)
        if (correctIndex === -1) {
           return false 
        }
        console.log(arr2)
        arr2.splice(correctIndex,1) // loops over this array and says is this one squared or 2 squared
        //and then splice it to take it away of the array so that e know its shrinking 
        //deal with each item in the array
        
    } 
        return true
}
//index of: iterate the entire array 
same([1,2,3,2], [9,1,4,4])

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
}
let frequencyCounter1 = {}
let frequencyCounter2 = {}

 for (let val of arr1) {
     frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
 }
    for (let val of arr2) {
     frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
 }
 for (let key in frequencyCounter1) {
     if (!(key ** 2 in frequencyCounter2)) {
         return false
     }
     if (frequencyCounter2 [key ** 2] !== frequencyCounter1 [key]) {
         return false
     }
 }
 console.log(frequencyCounter1)
 console.log(frequencyCounter2)
 return true
 }
 //tine complexity: 0(n)
//val is each element ijn the array

//***** ANAGRAMS ******

//given two strings write a functiomn to determine if the 
//second string is an anagram of the first.
//ex: iceman and cinema 

validAnagram('', '') // true
validAnagram('aaz','azz') //false
validAnagram ('rat', 'car') //false 