//algorithm : a process or a set of steps to accomplish a task
//
//1. MAKE A PLAN for solving problems
//2. problem solving patterns 

//********1. problem solving strategies******** 

//1. understand the problem 
//2. explore concrete examples 
//3. break it down 
// 4. solve/simplify
//5. look back and refactor


//*****1. understand the problem****

//1. can i restate the problem in my own words?
"add two numbers together"
//2. what are the inputs that go into the problem>
//if you are adding really large numbers you cant do it with really big numbers
//should it be an integer>? a float?
//3.what should the output look ,ike? what should it be returned?
//same as input
//4. can the outputs be determined from the inouts?
//do i have enough info to solve the problem? 
//((you might not be able to answer this until you dolbe the problem, 
//and thats ok. ))  
//if only one number, what happens>? do we add 0>?
// 5. How should i label the important pieces of data that are part of the problem?
// name our function add, num1 and num2 arguments, sum is our return 
// Example:
//write a function which takes 2 numbers and returns their sum


//*******2. exploring concete examples******

//2. come out with concrete examples, coming out with examples can help you understand the problem better
//you can check if your solution works as it works

//start with simple examples
// progress to more complex examples
//explore examples with empty inputs
//explore examples with invalid inputs

//write a function which takes in a string and returns counts of eacxh character in the string
//Simple examples:
//charCount("aaaa") // {a:4, b:0, c:0}
//charCount("hello") // {h:1, e:1, l:2, o:1}

//more complex examples:
"my phone number is 18763"
"Hello hi"
//what about numbers, charaacters, capital letters, ignoring casing?

// explore examples with empty inoputs
//CharCount("") //return what? empty object? error, null, undefined?

//invalid inpouts
//what if someone passes stuff not valid : not important in an interview 

//****** 3. break it down*******

//steps I need to take: communicate what you sre doing 
//write skeleton of your function

//function charCount(str) {
    //do something
    //return an object with keys that are lowercase alphanumeric characters in the string:
    //values should be the counts for those characters 

//only need to care about alphabetic and numbers and lowercasing them 


//}

//function charCount(str) {
    //make object to return at end 
    //loop over string for each character, 
    //if the char is a number/letter AND is a key in object, add one to countt
    //if the char is a number/letter AND is not in objexct, add it  and set value to 1
    //if character is something else (space, period, etc dont do anything)
    //return object at end  
//}
//we have to do something for every character in the string and we have to make the thing we are going to return and return it ant the end

// we need to loop over string, we are gonna look at each charactrer, and lower case it, 
//build our object one character at the time and return it at the end 


//******** 4. solve/simplify **** sometimes you are not ready to solve, so just simplify

//solve a problem if you can and if you cant simplify the problem 
//try to ignore the part that is giving yopu a hard time and solve everything else

//find the thing that is difficult that youre trying to do
//ignore it temporily
//write a simplified solution
//incorporate the difficulty 

//the part thats hard is making sure is alphanumeric lets ignore it we will lowercasde it with the methof
//google it, tell them that
 function charCount (str) {
     //make object to return at the end
     var result = {}
     //loop over string for each character
     for (var i = 0; i <str.length; i++) {
         var char = str[i].toLowerCase()
         if (isAlphaNumeric(char)) {
         //if the char is a number/letter AND is a key in the object
         if (result[char] >0 ) {
             result[char]++
         } else {
             //if the char is a number/letter AND is not a key in the object
             result [char] = 1
         }
         } 
     }
     return result
 }

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0) //for the first letter
    if (!(code > 47 & code < 58) &&
    !(code > 64 & code <91 ) && 
    !(code > 96 & code <123)) {
        return false
    }
    return true
}

//you can ask the interviewer when you are 90% there, do you have any solutions for the difficult part?
//
//charCodeAt
//code at: if it is alphanumeric 
// code > 47 & code < 58 --> numbers
//code > 64 & code <91 --> uppercase 
//code > 96 & code <123 --> lowercase
 

 