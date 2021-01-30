var root = document.getElementById("root");
// Zad 1 
var div = document.createElement("div");
div.textContent = " To jest nowy element";

root.appendChild(div);

// Zad 2

var favourteFruit = ["banan", "jabłko", "malina", "marakuja", "ananas", "winogron"];
var list = document.createElement("ul");

favourteFruit.forEach(element => {
    var li = document.createElement("li");
    li.textContent = element;
    list.appendChild(li);
});

root.appendChild(list);

// Zad 3 


// Zad 4 
var button = document.createElement("button");
button.id ="button-ex4";
button.textContent = "button ex4";
root.appendChild(button);
button.addEventListener("click", () => { 
        button.remove();
});


// Zad 5 
var random = Math.floor(Math.random()*10);
console.log(random);
for (let index = 0; index < random; index++) {
    let div = document.createElement("div");
    div.textContent = `to jest div numer ${index+1}`; // żeby nie wypisywało pierwszego div jako 0
    root.appendChild(div);
}

// Zad 6 
var obj = { div1: 'to jest div', 
            span1: 'to jest span', 
            div2: 
                { div3: 'to jest div', }, 
            span2: 'to jest span' };

let div1 = document.createElement("div");
div1.textContent = obj.div1;
root.appendChild(div1);

let span1 = document.createElement("span");
span1.textContent = obj.span1;
root.appendChild(span1);

div2 = document.createElement("div");
div3 = document.createElement("div");
div3.textContent = obj.div2.div3;
div2.appendChild(div3);
root.append(div2);

let span2  = document.createElement("span2");
span2.textContent = obj.span2;
root.appendChild(span2);

// Zad 7 
let listValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let list1Ex7 = document.createElement("ul");
let list2Ex7 = document.createElement("ul");

listValues.forEach(element => {
    let listItems = document.createElement("li");
    listItems.textContent = element;
    list1Ex7.appendChild(listItems);    
});

let button1 = document.createElement('button');
button1.textContent = "button1Ex7";


let button2 = document.createElement('button');
button2.textContent = "button2Ex7";
button2.disabled = true;

button1.addEventListener("click", () => { 
    let li = document.createElement("li");
    li.textContent = list1Ex7.lastChild.textContent;
    list1Ex7.removeChild(list1Ex7.lastChild);
    list2Ex7.appendChild(li);
    if(list1Ex7.childElementCount == 0) 
    {
        button1.disabled = true;
    }
    button2.disabled = false;
})

root.appendChild(list1Ex7);
root.appendChild(button1);
root.append(list2Ex7);
root.appendChild(button2);

button2.addEventListener("click", () => { 
    let li = document.createElement("li");
    li.textContent = list2Ex7.lastChild.textContent;
    list2Ex7.removeChild(list2Ex7.lastChild);
    list1Ex7.appendChild(li);
    if(list2Ex7.childElementCount == 0) 
    {
        button2.disabled = true;
    }
    button1.disabled = false;
})

// Zad 8
function createForm(param) {
    let newLabel = document.createElement('label');
    newLabel.innerHTML = param;
    return newLabel;
}
const result = document.createElement('div');
const form = document.createElement('form');
const whichElement = document.createElement('input');
const whichColor = document.createElement('input');
const content = document.createElement('input');
const numbersOfElements = document.createElement('input');
const makeBr = document.createElement('br')
form.appendChild(createForm('Jaki stworzyć element'));
form.appendChild(whichElement);
form.appendChild(makeBr)
form.appendChild(createForm('Jakiego koloru ma być element'));
form.appendChild(whichColor);
form.appendChild(makeBr)
form.appendChild(createForm('Jaki tekst powinien zawierac?'));
form.appendChild(content);
form.appendChild(createForm('Ile ich stworzyć?'));
form.appendChild(numbersOfElements);
root.appendChild(form);
root.appendChild(result);
let buttonex8 = document.createElement('button');
buttonex8.innerText = "Run query";
buttonex8.type = "submit";
buttonex8.addEventListener('click', (event) => {
    event.preventDefault();
    for (let i = 0; i < parseInt(numbersOfElements.value); i++) {
        let newElement = document.createElement(`${whichElement.value}`);
        newElement.style.color = `${whichColor.value}`;
        newElement.innerText = content.value;
        root.appendChild(newElement);
    }
});
form.appendChild(buttonex8);

//zad 9

// zad 10

// zad 11 
function CreateDivWithNumbers(param) {
    const numbersInString = param.match(/[0-9]+/g);
    if (numbersInString.length > 0) {
    const numbers = numbersInString.map(item => Number(item));
    const addingNumbers = numbers.reduce( (x,y) => x + y )
    console.log(addingNumbers)
    const multiplingNumbers = numbers.reduce( (x,y) => x * y )
        for (let i = 0; i < multiplingNumbers; i++) {
          const resultDiv = document.createElement("div");
          resultDiv.textContent = param;
          document.body.appendChild(resultDiv);
          }
       }
    }
   CreateDivWithNumbers('1a3a2b8bb')
