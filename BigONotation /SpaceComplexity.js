//space complexity
//n grows the input n is going to grows
//what happens inside the algorithm 
//booleans numbers constant space 
//strings bigger o(n)
//length of an array also o(n)

function sum(arr) {
    let total = 0; // one numbers
    for (let i = 0; i< arr.length; i++) {
        total += arr[i]
    }// two number
    return total
}
//comnstant space o(1)

function double(arr) {
    let newArr = []
    for (let i = 0; i<arr.length; i++) {
    newArr.push(2* arr[i])
    }
return newArr
}
//new arr going up n numbers as n grows 
//o(n)

//log time complexity it great its better than o(n)
// O(log n) is better than O(n)
//O(nlog n) is worse than O(n)
