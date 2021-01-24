// Zad 1.1 
let buz = document.getElementById('buz');
let buzParent = buz.parentElement;
console.log(buzParent);

// Zad 1.2 
let baz = document.getElementById('baz');
let nextBrotherBaz = baz.nextElementSibling;
let beforeBrotherBaz = baz.previousElementSibling;
console.log(beforeBrotherBaz);
console.log(nextBrotherBaz); // null poniewaz brak następnego elementu brata

// Zad 1.3
let foo = document.getElementById('foo');
let childrenFoo = foo.children;
console.log(childrenFoo);

//Zad 1.4, skorzystałem z wcześniej juz pobranego wezła foo
let fooParent = foo.parentElement;
console.log(fooParent);

//Zad 1.5 
let fooFirstChild = foo.firstElementChild;
console.log(fooFirstChild);

// Zad 1.6
let fooChilds = foo.children;
console.log(fooChilds[Math.floor(fooChilds.length/2)]);

// Zad 2 
function SqrClick(element) { 
    element.addEventListener('click', (e) => { 
        console.log(element.textContent);

    });
}

SqrClick(document.getElementById('ex2'));

// Zad 3 
function addEventsButton() { 
    let buttons = document.querySelectorAll("#ex3 button")
    buttons.forEach(element => {
        element.addEventListener('click', () => { 
            if(element.nextElementSibling.style.display == 'none')
                element.nextElementSibling.style.display = "block";
            else 
            element.nextElementSibling.style.display = "none";
        });
    });
}

addEventsButton();

// Zad 4 
function changeColor() { 
    let buttons = document.querySelectorAll("#ex3 button")
    buttons.forEach(element => {
        element.addEventListener('click', () => { 
            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            element.parentElement.style.backgroundColor = randomColor; 
        });
    });
}

changeColor();


// Zad 5 
function ex5() {
    var element = document.getElementById('ex5');
    element.querySelectorAll('div').forEach((div) => {
        div.onmouseover = () => {
            //var elem = element.querySelectorAll('ul li:first-child');
            //var elem = element.querySelectorAll('ul li:last-child');
            //var elem = element.querySelectorAll('ul li:nth-of-type(2n)')
            //var elem = element.querySelectorAll('ul li');
            var elem = element.querySelectorAll('ul');
           
            elem.forEach(el => el.style.backgroundColor = div.style.backgroundColor);
        };
    
    });
}
ex5();


// Zad 6
const ex6 = document.getElementById('ex6');

let first = ex6.firstElementChild.firstElementChild.firstElementChild;

let second = ex6.firstElementChild.parentNode.firstElementChild.firstElementChild.nextElementSibling.parentNode;

let third = ex6.parentNode.firstElementChild.parentNode.children[1].firstElementChild.firstElementChild.firstElementChild;
