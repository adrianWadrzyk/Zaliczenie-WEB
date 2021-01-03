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
});

var inputTest = document.getElementById("input-test");
inputTest.addEventListener("change", (e) => {
    console.log(e);
});

// Zad 2
var buttonEx2 = document.getElementById("ex2");
buttonEx2.addEventListener("click", () => {
    let span = document.getElementById("span-ex2");
    span.innerText = buttonEx2.dataset.text;
});

