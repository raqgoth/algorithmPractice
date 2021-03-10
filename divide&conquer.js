//dividing a data set into smaller chunks and then repeating a process with 
// subset of data
//diviiding into smaller pieces
//doing something to each smaller piece to figurte out where ti go next 
//this pattern can reduce time complexity

//codimg example:

//Given a sorted array of integers write a function called search that accepts a value 
// ansd returns the index where the value passed to the function 
//is located. if the value is not found return -1

search([1,2,3,4,5,6], 4) // return 3

function search (arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val ) {
            return i;
        }
    }
    return -1
}

o(n)
//linear search 
// is this 11? no is this 11? no and we either find it or we dont

//binary search:

[1,2,3,5,6,8,9,12,15,16,29]

function search(arr, val) {
    //pick a middle point because its sorted. I wanrt to know if 
    //is there. 
   //doe3s the value we want greater than 8 or less than 8.. ingore the less than 8,
   //because its sorted
   //then you look at the subarray, and same take the middle point, and then ask the same question
   //and you keep going until you find the number
let min = 0
let max = array.length-1

while (min <= max) {
    let middle = Math.floor((min +max) / 2)
    let currentElement = array[middle]

    if (array[middle] < val) {
        min = middle - 1
    }
    else {
        return middle
    }
}
return -1
}

//use it for: sorting large data!

