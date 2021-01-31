let number1_rep4  = 2;
let number2_rep4 = 19;
let number3_rep4 = 5;
let result_rep4 = 0;
let n = 10;
// zad 1
if(number1_rep4>number2_rep4)
    console.log("Wieksze jest num1");
else 
    console.log("Większe jest num2");
//zad 2
if(number1_rep4>number2_rep4 && number1_rep4 > number3_rep4)
    console.log("Wieksze jest num1");
else if(number2_rep4 > number3_rep4 && number2_rep4 > number1_rep4) 
    console.log("Większe jest num2");
else
    console.log("Większe jest num3");
// zad 3
for(let i =0; i<10; i++)
    console.log("Lubię JavaScript");

 // zad 4   
for(let i =0; i<10; i++)
    result_rep4 += i;

console.log(result_rep4);

// zad 5
for(let i =1; i<=n; i++)
    console.log((i%2 == 0) ? i + " jest parzysta": i + " nieparzysta");
// zad 6
for(let i = 0; i<=10; i++)
    for(let j = 0; j <= 2; j++)
        console.log("i= " + i + ", j= " + j);
// zad 7
for(let i = 0; i <= 100; i++)
    { 
      if (i > 0 )
      {
            if((i%3 == 0) && (i%5 != 0))
            console.log("Fizz");
            else if((i%5 == 0) && (i%3 != 0))
                    console.log("Buzz");
            else if((i%5==0) && (i%3==0))
                    console.log("FizzBuzz");
            else  
            console.log(i);
      } else { 
          console.log(i);
      }
    }
// zad 8
    const star = '*';
    const space = ' ';
    
    // a)
    for (let i = 0; i < 6; i++) {
    
        let result = "";
        
        for (let j = 0; j < i; j++) {
            result += star;
        }
        console.log(result);
    }
    
    
    // b)
    
    var output = '';
    const num = 6;
    
    for(var i=1; i<=num; i++){
      
      for(var k=1; k<=num-i; k++){
        output += space;
      }
      
      for(var j=1; j<=i; j++){
         output += star+space;
      }  
      
      
      console.log(output);
      output = "";
    }
    
    // c)
    
    let count = num - 1; 
    
    for(var j=1; j<=num; j++){
      
        for(var i=1; i<=count; i++){
          output += space;
        }
    
        count--;
        
        for(var i=1; i<= 2 * j - 1; i++){
           output += star;
        }  
        
        
        console.log(output);
        output = "";
    }
    
    // d)
    
    for (let i = 0; i < 6; i++) {
    
        let result = "";
        
        for (let j = 0; j < i + 1; j++) {
            result += star;
          
        }
      
        for (let k = 0; k < 6 - (i + 1); k++) {
            result += (k + 1); 
        }
        
        console.log(result); 
    }
    console.log('------');
    
    for (let i = 0; i < 6; i++) {
    
        let result = "";
        
        for (let j = 0; j < (6 - i); j++) {
            result += star;
          
        }
        
        for (let k = 0; k < 6 - (6 - i); k++) {
           result += 6 - ((6 - (6 - i)) - k);
        }
        
        console.log(result);
    }
    
    // e)
    
    var output = '';
    
    
    for(var i=1; i<=num; i++){
      
      for(var k=1; k<=num-i; k++){
        output += space;
      }
      
      for(var j=1; j<=i; j++){
         output += star+space;
      }  
      
      
      console.log(output);
      output = "";
    }
    
    for (let i = 0; i < 5; i++) {
        let result = '';
    
        for (let j = 0; j < 5; j++) {
            result += ' ';
        }
    
        console.log(result + ' ' + star);
    }

