////**** 4! *******
//factorial 

4 * 3 * 2 * 1
//non recurisve solution: 
function factorial(num) {
    let total = 1
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total

}
factorial(4)

//recursive solution:

function factorial(num) {
    if (num === 1) return 1
return num * factorial(num - 1)
}
factorial(3) = 3 * factorial(2)
factorial(2) = 3 * factorial(1)


//but what is the end point? we dont want to keep going to 0 becasuse if u multiply by 0 it erases everything
//so return only till 1 base case 1 if num === 1 return 1

// 
//***** where things go wrong.... problems

//-- no base case or base case is wrong 
//because you can keep going over and over 

//-- returning the wrong thing or forgetting to return
// -- can result in : stack overflow max call stack exceeded

//******* Helper method recursion **********

function outer (input ) {
    var outerScopedVariable = []

    function helper (helperInput) {
        //modify the outerScopedVariable
        helper(helperInput --)
    }
    helper(input)
    return outerScopedVariable
}

 outer(passsomething )

function collectOdds(arr) {
    let result = []
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
     
}
collectOdds ([1,2,3,4,5,6,7,8,9])
// mod 2 is not div isible by 2
//*******slice::::: make a subaeeay cutting an array and cut everything until 1st position*****


///**** Pure Recursion ****
function collectOdds(arr) {
    let newArr = []

    if (arr.length === 0) {
        return newArr
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOdds(arr.slice(1)))
}
collectOdds([1,2,3,4,5])

//for arrays : use methods like slice, the spread operator, and concat to make sub arrays and not change 
//the original array

// for strings: strings are not changeble so you have to use methods: slice, substr, or substring to make copies of 
//strings

// for objects: to make copies of objects: the spread operator or object.assign 

//***** spread operator : (... newObj)

// **** Object.assign(target, source)

// target: It is the target object to which values and properties have to be copied.
//sources: It is the source object from which values and properties have to be copied.
//Return Value: 
//Object.assign() returns the target object.
//Examples of the above function are provided below.
//Examples: 
 

//Input : //
        var obj1 = { a: 10 };
        var new_obj = Object.assign({}, obj1);
        console.log(new_obj);
//Output : 
//Object { a: 10 }
