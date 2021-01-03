/*var car = {
    make: "Mercedes",
    color: "Grey",
    year: "2020",
    changeMake: function newMake(newMake) { 
        this.make = newMake;
    }
};

let obj = {
    sum: 0,
    calculateSum(testArray) {
        this.sum = testArray.reduce((a, b) => {return a + b});
    }
}

obj.calculateSum([20, 50, 30]);
console.log(obj.sum);

const car2 = { 
    brand: "Mercedes", 
    color: "Red"
};

for(const key in car2) { 
    console.log(key + ":" + car2[key]);
}

console.log(car);
console.log(car.color);

*/

function Person(name, surname, age, county, city, language ) { 
    this.name = name; 
    this.surname = surname; 
    this.age = age; 
    this.county = county; 
    this.city = city; 
    this.language = language; 

    this.setAge = (age) => {
        this.age = age;
    }

    this.setCity = (city) => { 
        this.city = city;
    }
}