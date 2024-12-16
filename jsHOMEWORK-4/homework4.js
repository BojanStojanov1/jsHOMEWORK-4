//HOMEWORK #1
//Create a function called tellStory()

//The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

//The function should return one big string with a story made from the arguments

//Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

//The value that is returned from the function should be printed in the console or in alert

function tellStory(){
    let array = ['Bojan', 'tired', 'working'];
    console.log(`This is ${array[0]}.${array[0]} is a nice person. Today they are ${array[1]}. They are ${array[2]} all day. The end.`);
}
tellStory();

console.log(" ");

//HOMEWORK #2
//Write a function that will take an array of 5 numbers as an argument and return the sum.

//Print it in the console or in alert

/*BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.*/

function sum(){
    let numbers1 = [2, 5, 77, 14, 9];
    let sum = numbers1[0] + numbers1[1] + numbers1[2] + numbers1[3] + numbers1[4]; 
    console.log(sum);
}
sum();

console.log(" ");

/*HOMEWORK #3
Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC!"*/

function arrayToSentance(arr){
    let sentance = arr.join(' ');
    sentance = sentance + '.';
    console.log(sentance);

}
arrayToSentance(['Hello', 'I', 'am', 'Bojan'])
console.log(' ')
/*Homework #4
Title: Looping structures

Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.*/

for (let i= 1; i <= 20; i++)
   console.log(i);

console.log(' ')

/*Homework #5
Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it*/

function sumOfMinAndMax(myarray){
    let max= myarray[0];
    let min= myarray[0];
    for (let i=1; i < myarray.length; i++){
        if (myarray[i] > max) {
            max = myarray[i];
        } else if (myarray[i] < min) {
            min = myarray[i]
        }
    }
    return max+min
}
let myarray= [2,55,88,1]
console.log(sumOfMinAndMax(myarray))

console.log(" ")

/*Homework #6
Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]*/

function fullNameOfStudents(firstNames, lastNames) {
   
    let fullNames=[];
    for(let i=0; i<firstNames.length; i++) {
        let fullName = numeric[i] +'.'+' '+firstNames[i]+' '+lastNames[i];
        fullNames.push(fullName);
    }
    return fullNames;
}
let numeric = [1, 2, 3];
let firstNames = ['Bojan','Petar', 'Kiro'];
let lastNames = ['Stojanov','Petrov', 'Gligorov'];

console.log(fullNameOfStudents(firstNames, lastNames));