let number1_rep4  = 2;
let number2_rep4 = 19;
let number3_rep4 = 5;
let result_rep4 = 0;
let n = 10;

if(number1_rep4>number2_rep4)
    console.log("Wieksze jest num1");
else 
    console.log("Większe jest num2");

if(number1_rep4>number2_rep4 && number1_rep4 > number3_rep4)
    console.log("Wieksze jest num1");
else if(number2_rep4 > number3_rep4 && number2_rep4 > number1_rep4) 
    console.log("Większe jest num2");
else
    console.log("Większe jest num3")

for(let i =0; i<10; i++)
    console.log("Lubię JavaScript");

    
for(let i =0; i<10; i++)
    result_rep4 += i;

console.log(result_rep4);

    
for(let i =1; i<=n; i++)
    console.log((i%2 == 0) ? i + " jest parzysta": i + " nieparzysta");

for(let i = 0; i<=10; i++)
    for(let j = 0; j <= 2; j++)
        console.log("i= " + i + ", j= " + j);

for(let i = 0; i <= 100; i++)
    { 
      if (i > 0 )
      {
            if((i%3 == 0) && (i%5 != 0))
            console.log("Fizz")
            else if((i%5 == 0) && (i%3 != 0))
                    console.log("Buzz")
            else if((i%5==0) && (i%3==0))
                    console.log("FizzBuzz");
            else  
            console.log(i);
      } else { 
          console.log(i);
      }
    }

let halfTree = "";
for(let i=1; i<6;i++) { 
   while(halfTree.length < i)
    halfTree += "*";      
console.log(halfTree);
}
