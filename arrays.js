// ****ARRAYS*****
//Arrays are ordered lists 

let names = ["Michael", "Melissa", "Andrea"]

let values = [true, {}, [], 2, "awesome"]

// **** When to use arrays: **** 

//when you need order 
//when you need fast access
//insert or removal it depends 

// **** big o notation OF ARRAYS ***

//insertion --> depends
//removal --> depends
//searching --> O(n) 
//access --> O(1)
//inserion to end of the array: --> O(1)
//inserion at the beginning of array --> O(n)
//removing to the end of array --> O(1)
//removing to the beginning of array --> 0(n)

//push and pop (end)--> faster
//shift and unshift (beginning) --> slower

// *** ARRAY METHODS ***  

//ordered lists - objcts: non ordered list

let names = ["Michael", "Melissa", "Andrea"]

let values = [true, {}, 2, "awesome"]

//when to use them? When you need order
//they are not the only ordered one, also linkd lists

//when you need fast access/insertion and removal (as long as not too long)

// big o of arrays 

//insertion removal: it depends
//searching: O(n)
//ACCESS: O(1)

//INSERTION 
//PUSH: ADD TO THE END: O(1)
//add to the beg: O (n)
//removing for the big: O(n)

//array methods

//Push and Pop: adding and removing from the end of the array: O(1)
//shift and unshift: adding and removing from the beginning of the array: O(n)
//concat: takes multiple arrays and adds them together :  O(n)
//slice: return a copy of part of an array or the entire array if you want: grows with hiow manby elements you are trying to copuy O(n)
//splice: remove and add new elements insert at the beginning of the arrray or at the end and same 
//O(n)
//sort: O(n*log n )
//for each, map, filter, reduce: O(n)

//objects are faster but no order, arrays are faster if you do at the end not at the beginning, adding 
//and removing from the middle not fast either 

