//print function of javascript
console.log("First");
console.log("Learning javascript for web dev");


//let function
let firsName= "Sayantani";
let lastName = "Dey";
let isApproved = true;
let Age = 24;
let address = undefined;
let race = null;

console.log(isApproved);
console.log(Age);
console.log(race)
console.log(address);

//making an object
let person = {
  name:'maximus',
  age: 6
};
console.log(person);

//dot notation
person.name='Rapunzel';
console.log(person.name)

//bracket notation
let selection = 'name';
person[selection]='Sayantani';
console.log(person.name);

//testing arrays
let selectedColours = ['blue', 'red', 'green'];
console.log(selectedColours);

//arrays in javascript is dyanamic, so:

selectedColours[2] = '3';
console.log(selectedColours)

//functions now

function greet(name){  // name here is the parameter
    console.log('hello '+ name);
}
greet('sayantani');

//calculating task
function area(number1,number2){
    return number1*number2;
}
console.log (area(3,8));