// Zad 1
let more_divs = document.querySelectorAll('.more-divs');

function ret_tagTable(list) { 
    var tabName = []; 

    list.forEach(item => {
        tabName.push(item.tagName);
    });

    console.log(...tabName);
    return tabName;
}

ret_tagTable(more_divs);

// Zad 2 

let short_list = document.querySelector('.short-list');

function ex_2(param) { 
    console.log(param.innerHTML);
    console.log(param.outerHTML);
    console.log(param.className);
    console.log(param.classList);
    console.log(param.dataset);

}

ex_2(short_list);

// Zad 3
var sumAndSub = (element) =>{
    console.log(element.dataset)
    var num1 = parseInt(element.dataset.numberone);
    var num2 = parseInt(element.dataset.numbertwo);
    var num3 = parseInt(element.dataset.numberThree);
    var sum = num1 + num2 + num3;
    var sub = num1 - num2 - num3;
    return [sum,sub];
};
console.log(sumAndSub(document.querySelector('#datasetCheck')));
// Zad 4 
let spanText = document.getElementById("spanText");
spanText.textContent = "dowolny";

//Zad 5 
spanText.className = "dowolna";

// Zad 6 
let classes = document.getElementById("classes").classList;

function ex6(list) { 
    let newArray = [];
    list.forEach(element => {
        console.log(element);
        newArray.push(element);
    });
    console.log(newArray.join(" + "));
    let classesElement = document.getElementById("classes");
    classesElement.className = "";
    console.log("Usunięto klasy!");
}
ex6(classes);

// Zad 7 
let liLongList = document.querySelectorAll("#longList li");

function ex7(list) { 
    list.forEach(element => {
        if(!element.hasAttribute("data-text"))
         element.dataset.text = 'text';
    });
}

ex7(liLongList);

// Zad 8 
function ex8 (str) { 
    var obj = { newClass: str };
    ex8B(obj);
}

function ex8B (obj) { 
    let str = obj.newClass;
    document.getElementById("myDiv").className = str;
}

ex8("some_class");

// Zad 9 
function ex9(random) { 
    let numbres = document.getElementById("numbers");
    if(random % 2 == 0)
        numbres.className ="even";
    else 
         numbres.className="odd";
}

ex9(Math.floor(Math.random() * 10));

// Zad 10
let longList = document.getElementById("longList");

function ex10(list) { 
    let childrens = list.children;
    let result = [];
    for (let index = 0; index < childrens.length; index++) {
        result.push(childrens[index].textContent);
    }
    console.log(result);
}
ex10(longList);


// Zad 11 

let longListChildren = longList.children;
function ex11(list) { 
    for (let index = 0; index < list.length; index++) {
        list[index].dataset.oldValue = list[index].textContent;
        list[index].textContent = Math.floor(Math.random()*10);
    }
}

ex11(longListChildren);