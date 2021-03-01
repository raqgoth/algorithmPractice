//write a function that calculates the sum 
//of all numbers from 1 to and including n 

function addupTo (n) {
    let total = 0 
    for (let i = 1; i<=n; i++) {
        total +=i
    }
    return total 
}

console.log(addupTo (5050))

function addupTo(n) {
    return n * (n+1) / 2
}
console.log(addupTo(6))


//*********BIG O NOTATION********

//big o : numeric representation of the code 
//whats best 

//write a function that calculates the sum 
//of all numbers from 1 to and including n 

//**** TIME COMPLEXITY ****

//evaluating speed 
//not counting time seconds
//count the number of operations to perform

//add2 3 operations regardless of the size of n 

//add1 n operations because of the loop and the equal size is another assignment 
//n comparisons also assignments 
//it doesnt matter because it grows as n grows also grows

//3 operations 3 things that take time no matter what n is

//more things that take time as big as n gets 

//input to a function and the running time 
//the relationship between the two
//as n grows time grows or not?

// O(1) no change in run time.. constant which is 1

// O(n) as n grows operations grow -> loops

//nested loops O(n) squared


