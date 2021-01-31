const tab1 = ["ala", "mata", "kot", "ziemniak"];
console.log(...tab1);


// Tablica zad2;
const tab2 = [5,3,2,1,5,"ala"];

//Zad2.1
for(let i = 0; i < 2; i++)
        console.log(tab2[i]);

//Zad2.2
console.log(tab2[tab2.length-1]);

//Zad2.3
console.log(...tab2);

//Zad2.4
for (let i = 0; i < tab2.length; i++) {
    if(i%2 == 0)
        console.log(tab2[i]);
}

//Zad2.5 
for (let i = 0; i < tab2.length; i++) {
    const element = tab2[i];
    if(typeof(element)== "string")
        console.log(element);
}

//Zad2.6
for (let i = 0; i < tab2.length; i++) {
    const element = tab2[i];
    if(typeof(element)== "number")
        console.log(element);
}


//Tablica zad 3
tab3 = [1,2,3,4,5,6];
//Zad3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7
let sum = 0;
let  sub = 0;
let avg = 0;
let max = tab3[0];
let min = tab3[0];
for (let i = 0; i < tab3.length; i++) {
    const element = tab3[i];
    if (element > max)
        max = element;
    if( element < min)
        min = element;
    if(element % 2 == 0)
        console.log(element + " Jest parzysty");
    else 
        console.log(element + " Jest nieparzysty");
    sum += element;
    sub -= element;
}
avg = sum/tab3.length;
console.log(sum);
console.log(sub);
console.log(avg);
console.log(max);
console.log(min);

// Zad 3.8
for (let i = tab3.length-1; i >= 0; i--) {
    const element = tab3[i];
    console.log(element);
}

// Zad 4
function backSumOfElements(table) { 
    let sum = 0;
    table.forEach(element => {
        sum += element;
    });
    console.log(sum);
    return sum;
} 
backSumOfElements(tab3);

// Zad 5
function writeMultipleTable(table) { 
    let sum = 0;
    table.forEach(element => {
        sum += element;
    });
    let avg = sum/table.length;

    table.forEach(element => {
        console.log(element * avg);
    });
}

writeMultipleTable([10,20,30,20]);

//Zad 6 
function writeOddAvg(table) { 
    let sum = 0;
    table.forEach(element => {
        if(element % 2)
            sum += element;
    });
    console.log(sum/table.length);
}

writeOddAvg([12, 23, 10, 8]);

// Zad.7 

function compare(a, b) { 
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

function sortTable(table) { 
    return table.sort(compare);
}

console.log(sortTable([1,2,3,10,2,3]));


// Zad 8 

let exampleArrayA = [7, 6, 3, 4];
let exampleArrayB = [5, 6, 7, 8];

function sumOfArraysIndex(arrayA, arrayB){
    let array = [];
    arrayA.forEach((num, i) =>{
        array.push(num + arrayB[i]);
    });
    console.log(array);
    return array;
}

// Zad 9

function deleteElement(table, element) { 
    table.forEach(el => {
        if(el == element)
        {
            let index = table.indexOf(el);
            table.splice(index,1);
        }
    });
    console.log(table);
    return table;
}

deleteElement([1,2,1,3], 1);

// Zad 10
function tableNumbers(table, param) {
    let tableRevers = []; 
    table.forEach(element => {
        if(element == param)
            element *= -1;
        tableRevers.push(element);
    });
    console.log(tableRevers);
    return tableRevers;
}

tableNumbers([1,2,3,2,2,6,2],2);
