// Zad 1 
function Person(name, surname, age, country, city, language) { 
    this.name = name;
    this.surname = surname; 
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;

    this.changeAge = function(age) { 
        this.age = age;
    };
    this.changeCity = function(city) { 
        this.city = city;
    };
}


var p1 = new Person("Jack", "Jackson", 20, "USA", "New York", "English");
var p2 = new Person("Jan", "Kowalski", 21, "Poland", "Warsow", "Polish");
var p3 = new Person("Helga", "Brunchilds", 54, "Germany", "Berlin", "German");
var p4 = new Person("Batman", "Czarny Rycerz", 30, "USA", "Gothamcity", "English");
var p5 = new Person("Andrzej", "Uda", 50, "Poland", "Krakow", "Polish");

p1.changeCity("Warsow");
p1.changeAge(50);

p2.changeCity("Berlin");
p2.changeAge(234);

p3.changeCity("Tokyo");
p3.changeAge(12);

p4.changeCity("Wadowice");
p4.changeAge(23);

p5.changeCity("Arkham");
p5.changeAge(200);

console.log(p1, p2, p3, p4, p5);


// Zad 2 

function Calculator() { 
    this.memory = [];
    this.add = function(a, b) { 
         this.memory.push("add");
         console.log(a + b);
         return a+b;
     };

     this.sub = function(a , b) {
        this.memory.push("sub");
        console.log(a - b);
        return a-b;
     };

     this.mult = function(a, b) { 
         this.memory.push("mult");
         console.log(a * b);
         return a*b;
     };

     this.div = function(a, b) { 
         this.memory.push("div");
         console.log(a / b);
         return a/b;
     };

     this.writeMemory = function() { 
         console.log(...this.memory);
     };

     this.clearMemory = function() { 
        this.memory.splice(0, this.memory.length);
        console.log("Pamięć została usunięta!");
     };

}

var calc = new Calculator();
var calc2 = new Calculator();

calc.add(2,3);
calc.writeMemory();
calc.div(5,2);
calc.writeMemory();
calc.clearMemory();
calc.writeMemory();

calc2.add(2,5);


// Zad 3 

function Game ()
{
    Game.prototype.number = null;
    this.rand = function () {
        return setInterval(()=>{
            let rand = Math.floor(Math.random() *10 )+1;
            game_one.__proto__.number = rand;
            console.log(this.__proto__.number);
        }, 1000);
    };
    this.check = function (){
        return setInterval (() =>{
            console.log(this.__proto__.number);
            if(this.__proto__.number >= 5){
                console.log('finished');
                clearInterval(first);
                clearInterval(second);
            }
        }, 1000);
    };
}
let game_one = new Game();
let game_two = new Game();

var first = game_one.rand();
var second = game_two.check();