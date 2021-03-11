var twoSum = function(nums, target) {
let ans = []
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <nums.length; j++) {

    }
}
}
//to get O(n) to a hash table
//******Hash******* */
// a hash is just an object
//go through all the daa once and organize 
//it to find things quicker
var twoSum = function(nums, target) {
    let num = {}
    nums.forEach((n,i) => num[n] = i)
    for(let i = 0; i<nums.length; i++){
        if (num [target - nums[i]] !== undefined & num[target - nums[i]])
        return {

        }
    }}
    //n is value, [i]is kiny 
    //undefined: checks if a value exists in an object
    /* {
        2:0
        4:1
        6:1
        
    }
    person {
        name: ted
        age:30
        kids: 2
    }
    person.age !== undefined
    or
    if (age in person) {
        do something
        return something to as soon i have my answer 
    } 
    */
   var reverse = function(x) {
    let ans = ""
    if(x > 0) {
    let num = x.toString()
    for (let i = num.length - 1; i> -1 ; i--) {
        ans+= num[i]
    }
        ans= parseInt(ans)
    } else {
        let num = Math.abs(x).toString()
        for (let i = num.length - 1; i > -1; i--) {
            ans+= num[i]
        }
        if (Math.abs(ans) > 2**31 - 1)  {
            return 0
        }
        else {
            
        }
        return ans
    }
};
// ****Math.abs: absolute number, a positive number ********
//math.floor : returns the largest integer less than or equal to a given number.