var testEvent = document.getElementById("test-event");
testEvent.addEventListener("click", (e) => { 
    console.log(e);
});

/*
document.addEventListener("mousemove", (e)=> { 
    console.log(e);
})
*/
testEvent.addEventListener("mouseenter", (e) => { 
    console.log(e);
});

document.addEventListener("keypress", (e) => { 
    console.log(e);
});

document.addEventListener("scroll", (e) => { 
    console.log(e);
    checkScroll(e);
});

var inputTest = document.getElementById("input-test");
inputTest.addEventListener("input", (e) => {
    checkInput(e.target.value);
    console.log(e);
});

// Zad 2
var buttonEx2 = document.getElementById("ex2");
buttonEx2.addEventListener("click", () => {
    let span = document.getElementById("span-ex2");
    span.innerText = buttonEx2.dataset.text;
});

//Zad 3 

var squer = document.getElementById("ex3");
squer.addEventListener("mouseover", () => { 
    squer.style.backgroundColor = "blue";
});

squer.addEventListener("mouseleave", () => { 
    squer.style.backgroundColor = "red";
});


//Zad  4 (wykorzystałem event z zadania 1, żeby nie potrzebnie tworzyć dodatkowe zdarzenie zmiany)

function checkInput(value) { 
    var reg = /[0-9]/;
    if(value.match(reg) != null)
    {
        document.getElementById("ex3-err").innerText = "Nie mozna wpisywać cyfr!";
    }
}

//Zad 5 
function counter() { 
    var divEx5 = document.getElementById('ex5');
    divEx5.children[0].innerText = ++count;
    if(count == 10)
        buttonEx5.removeEventListener("click", counter );
}

var count = 0;
buttonEx5 = document.getElementById('ex5-button');
buttonEx5.addEventListener("click", counter);

// Zad 6 skorzystałem z eventu z zadania 1 obserwującego scroll strony.
function checkScroll(e) { 
    let height = window.scrollY;
    if(height > 200) 
        document.querySelector('body').style.backgroundColor = 'red';
    else 
        document.querySelector('body').style.backgroundColor = 'white';
}