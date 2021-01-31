// Zad 1:
class Person {
    constructor(imie, nazwisko, wiek, kraj, miasto) {
      Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
    }
  
    printInfo() {
      for (const [key, value] of Object.entries(this)) {
        console.log(`${key}: ${value}`);
      }
    }
  
    addYearToAge() {
      this.wiek++;
    }
  
  }
  
  const person1 = new Person('Adrian', 'Wądrzyk', 21, 'Polska', 'Wadowice');
  const person2 = new Person('Juliusz', 'Cezar', 31, 'Włochy', 'Rzym');
  
  person1.printInfo();
  person1.addYearToAge();
  person1.printInfo();

// zad 2
person1.favDishes = ['Spaghetti', 'Schabowy', 'Mizeria', 'Pizza'];
person2.favDishes = ['Winogrono', 'Manna', 'Gulasz', 'Oliwa'];

function showFavDishes() {
    console.log(this.favDishes);
  }

function addFavDish(dish) {
    this.favDishes.push(dish);
  }

person1.showFavDishes = showFavDishes;
person2.showFavDishes = showFavDishes;
person1.addFavDish = addFavDish;
person2.addFavDish = addFavDish;

person1.showFavDishes();
person2.addFavDish('Kopytka');
person2.showFavDishes();

// zad 3
class Calc {
    passNumbers(a, b) {
      this.a = a;
      this.b = b;
    }
  
    add() {
      return this.a + this.b;
    }
  
    sub() {
        return this.a - this.b;
    }
  
    div(invOrder) {
      if (this.b === 0) {
        console.error('You cannot div by 0');
        return;
      } else {
        return this.a / this.b;
      }
    }
  
    mul() {
      return this.a * this.b;
    }
  }
  
  const abCalc = new Calc();
  abCalc.passNumbers(10, 5);
  console.log(`add: ${abCalc.add()}`);
  console.log(`mul: ${abCalc.mul()}`);
  console.log(`sub: ${abCalc.sub()}`);
  console.log(`div: ${abCalc.div()}`);
  
  abCalc.passNumbers(2000, 0);
  abCalc.div();