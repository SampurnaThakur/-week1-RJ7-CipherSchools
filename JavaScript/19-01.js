//in javascript, we can declare a variable in 3 ways
//1.by using var
//2. by using let
//3.by using const

var myName= "John";
console.log(myName);
//myName = "Alex" (already defined)
myName.append("John");
console.log(myName);
const myName =5;

function addTwoNumbers(num1, num2){
    var num =5;
    return num1+num2;
}


let myName= "John";
console.log(myName);
//myName = "Alex" 
myName = 5;
console.log(myName);
let myName = "Taylor";  //cannot redeclare


//string interpolation

let myName = "Sampurna";
let myName = "Thakur";

//let fullName = firstName+ " " + lastName; // this will take extra space for storing the string together
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
console.log(firstName);

//Default Params

/*function addTwoNumbers(num1,num2) 
{
    return num1 +num2;
}*/

let addTwoNumbers =(num1,num2=1) => {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
}
console.log(addTwoNumbers(1,2));

//Rest and Spread Operator are applicable in arrays and objects in js

let array = [5,10,15,20,25]
//spread -> ...
console.log(...array)

//Rest -> ...

let maxOfNumbers = (...numbers)=> {
    let maximum = Number.MIN_VALUE;
    for(let number of numbers) {
        maximum = Math.max(maximum, number);
    }
    return maximum;
}
console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9));

//for object

let object = {
    name: "John",
    age: 24,
    address: {
        city : "New York",
        state: "NY",
        country: "USA",

    },
};
//let object2 = {...object, country:"USA", song:"Numb"};
let object2 = JSON.parse(JSON.stringify(object));
 object2.address.city = "new York";
  console.log(object2);
  