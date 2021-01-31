let logic1 = true;
let logic2 = false; 

console.log(true === false);

let num1 = 2; 
let num2 = 4; 
let moduloResult = 0;
moduloResult = num1%num2;
console.log(moduloResult);

let string1 = "ala "; 
let string2 = "ma kota";
let stringsResult ="";
stringsResult = string1 + string2;
console.log(stringsResult);

var someNumber = 425;
var someString = "425";
console.log(someNumber == someString); // nie porownujemy typow dlatego == true
console.log(someNumber === someString); // dodatkowo porownujemy czy jest taki sam typ dlatego === false;

let counter = 30;
console.log(counter);
counter++;
console.log(counter);
counter--;
console.log(counter);

let num3 = 5;
let num4 = 10; 
let result = null; 
result = num3 > num4;
console.log(result);