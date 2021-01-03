
// Zad 1

var list = document.querySelectorAll(".list");
console.log(list);

// Zad 2
function getTags(tag) { 
    var list = document.querySelectorAll(tag);
    return list;
}

var tags = getTags("span");
console.log(tags);


// Zad 3 

var idList = document.getElementById("list");
console.log(idList);


// Zad 4 
var allLi = document.querySelectorAll("li");
var allUl = document.querySelectorAll("ul");
var allSpan = document.querySelectorAll("span");
var allSpanInDivList = document.querySelectorAll("div.list > span");
var allSpanInDivId = document.querySelectorAll("div#spans > span");
console.log(allSpanInDivId);

function print(collection) { 
    collection.forEach(element => {
        console.log(element);
    });
}

print(allLi);
print(allUl);
print(allSpan);
print(allSpanInDivList);
print(allSpanInDivList);