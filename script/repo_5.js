// Zad 1

var i = 0;
function writeString() {
    i++; 
    console.log("Cześć po raz: " + i)

    if(i == 15)
    clearInterval(id);
}

var id = setInterval(writeString, 3000);

// Zad 2 

var tab = [1,2,3,4,5];
var id2;
function writeElement() { 
    setTimeout( () => { 
        console.log([...tab]);
        id2 = setInterval(writeCycleElement, 3000);
    }, 2000);
   
}

let j = 0;
function writeCycleElement() { 
        console.log(tab[j]);
        j++;
        if (tab.length == j)
            clearInterval(id2);
}



writeElement();
