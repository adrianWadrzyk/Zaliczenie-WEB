// zad 1
function write() { 
    console.log("Udało się!");
}
// zad 2
function withParam(param) { 
    console.log(param);
}
// zad  3
function showTab(tab) {
    console.log(...tab);
    return tab;
}
// zad 4
function timeString(text) { 
    var licznik = 0;
    var id = setInterval(() => { 
        console.log(text);
        licznik++;

        if(licznik == 3)
        {
            clearInterval(id);
            console.log("Koniec");
        }
    },3000);
}

write();
withParam("ala ma kota");
showTab([1,2,3,4,5]);
timeString("Hello");



