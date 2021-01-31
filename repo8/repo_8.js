
// Zad 1, 2
var car = {
    name: "Mercedes",
    color: "Grey",
    year: "2020",
    changeMake: function newName(newName) { 
        this.name = newName;
    }
};
// Zad 3
let obj = {
    sum: 0,
    calculateSum(testArray) {
        this.sum = testArray.reduce((a, b) => {return a + b;});
    }
}

obj.calculateSum([20, 50, 30]);
console.log(obj.sum);

// Zad 4, 5
const car2 = { 
    brand: "Mercedes", 
    color: "Red",
    fabric : { 
        name: "Mercedes Company",
        value: "1bln"
    }
};

for(const key in car2) { 
    console.log(key + ":" + car2[key]);
}

console.log(car2.fabric.name);
console.log(car2.fabric.value);

//  zad 6
car2.welcome = function() { 
    console.log("Hello");
};

car2.price = 5000;
console.log(car2.welcome);
console.log(car2.price);