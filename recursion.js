// write a solution itiration itirating  
// recursive
// TAKING ONE PROBLEM AND DO IT OVER AND OVER UNTIL YOU 
//ON A SMALLER PIECE OR A CHANGING PIECE
//until you hit an end point---> called base case

//****** Recursion *******
//  a function that calls itself

//
//the call stack 
//when a function is invoked is placed on the top of the stack like a pile of papers //push

//when the return key word or when tnhe function ends the compilerwill remove the function or the stack of papetr
//(pop)

function takeShower() {
    return 'showering'
}
function eatBreakfast() {
    let meal = cookFood()
    return `eating ${meal}`
}
function cookFood() {
    let items = ["oatmeal", "eggs", "protein shake"]
    return items[Math.floor(Math.random()*items.length)]
}
//pick a random item and return it 

function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log('ok lets go')
}
wakeUp()


//invoke the same function over and over until the stopping point : base case 

//stopping point: where the recursion ends

//recursive function parts
//1/ base case 
//2. different input change the list, pass the list through and 
//invoke the function and until you hit the base case 

function countDown (num) {
    for (var i = num; i < 0; i--) {
        console.log(i)
    }
     console.log('done')
}

//with recursion:
function countDown(num) {
    if (num <= 0) {
        console.log('all done')
        return 
    }
     console.log(num)
     num--
     countDown(num)
}
countDown(3)

//print 3 
//call countDown (2)
//is 2 less or equal to 0?
//no. then print 2 
//then call countDown(1)
//is 1 less or equal to 0?
//no so -- countDown (0)
//thats our base case 
//the return is to stop it.  

function sumRange(num) {
    if (num === 1) return 1
    return num + sumRange(num -1)
} 
// what is the base case? 
// if num ===1 return 1
// return num + sumRange (num -1 ) is the recursive piece

sumRange(4)

