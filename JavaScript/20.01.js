//.map()
/*let array=[1,2,3,4,5];
//let newArray=array.map() 
//In js,a function is also a js object
function functionForMap(element){
    return element * element;
}
let newArray = array.map(functionForMap);
console.log(newArray);
let addTwoNumbers = (a,b) => a + b;
let num1 = 4;
let num2 = 5;
addTwoNumbers(num1, num2);


//for (let i=0; i<array.length;i++){
    //newArray[i] = array[i]*array[i];
//}
//console.log(newArray)
//2. .foreach()
//let array = [1,2,3,4,5];
/*array.forEach((element,index)=>{
    element *= element;
    console.log(element);
});
console.log("Array is;  ", array);
//in a js, a function also a js Object
//3. .filter()*/
//let array = [10,20,30,40,50];
/*vector<int> v;
for (int i = 0; i < sizeof(array)/sizeof(array[0]); i++) {
    if(array[i] >= 30){
        v.push_back(array[i]);
    }
}*/
/*List<Integer> List = new ArrayList<>();
for (int i=0;i<array.length;i++){
    if(array[i] >= 30) {
        list.add(array[i]);

    }
}*/
//let array =[10,20,30,40,50];
//let temp=array.find((value)=>{
  //  return value > 20;
//});
//console.log(temp);
//4. .sort()
/*let array = [50,40,30,20,10];
let array.sortedArray=array.sort(el1,el2) => {
    el1 = Number(el1);
    el2 = Number(el2);
    return el1 - el2;
};
console.log(sortedArray);*/
//Object Destructing
/*let myObject = {
    name: "Alex",
    age: 24,
    addresss: {
        street: "Brooklyn",
        city: "New York",
        state: "NY",
        country: "USA",
        passportDetails:{
            PassportNumber: "Abcd1234",

        },
    },
};*/
//let myName = details.name;
// let age = details.age;

//Map and set
/*let map = new Map();
map.set(1,"Shantanu");
map.set(2,"Alex");
console.log(map);
map.enteries();
//set
let set =  new set();
set.add(1);
set.add(-1);
console.log(set);*/
//class
class Animal {
    noOfLegs;
    Color;
    family;
    sound;
    constructor(noOfLegs,color,family,sound) {
        this.noOfLegs =noOfLegs;
        this.color =color;
        this.family=family;
        this.sound=sound;
    }
}

let animal = new Animal(4,"brown","rodent","something");
console.log(animal);


