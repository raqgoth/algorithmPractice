//OBJECTS --> KEY FIRSTNAME VALUE KELLY , KEY VALUE
//ojects are unordered lists 
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}
//when to use objects:
//when you dont need order
//when you need fast access/insertion and removal

//Big O of objects

//insertion --> O(1)
//Removal --> O(1)
//searching --> O(n)
//access --> O(1)


// OBJECTS METHODS 

//Object.keys --> O(n)
//Object.values--> O(n)
//Object.entries --> O(n)
//hasOwnProperty --> O(1)

 
console.log(instructor.hasOwnProperty(
"firstName"))

console.log(Object.entries(instructor))
console.log(Object.keys(instructor))

console.log(Object.values(instructor))

