// **** Sliding window pattern ****

//creating a window which can be either an array or number from 
//one position to another

//depending on condition, the window either increases or closes (and a new window is created)

///use it to keep track of a subset of data in an array or string 

//example:

"hellothere"

//write a function to find the longest sequel of unique characters
//in this string 
//window: string, array, a single variable, a sub array and move it
//usually to the left and sometimes make a new window

//coding example:

//write a function called maxSubarraySum which accepts an array of integers 
//and a number called n. the function should calculate the maximum sum 
// of n consecutive elements in the array

maxSubarraySum([1,2,5,2,8,1,5], 2) //return 10

function maxSubarraySum(arr,num) {
    if (num > arr.length) {
        return null
    }
    var max = -Infinity
    for(let i = 0; i<arr.length - num+1 ; i++) {
        temp = 0
        for (let j = 0; j <num; j++) {
            temp+= arr[i+j]
        }
        if (temp > max) {
            max = temp

        }
        console.log(max)
    }
    return max
}

maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)

function maxSubarraySum (arr, num) {
    let maxSum = 0
    let tempSum = 0
    if (arr.lemgth < num) return null
    for (let i = 0; i < num; i++ ) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}
//math.max allows you to find the max number 
//subtracting one value in and add the next value in 
//o(n)
