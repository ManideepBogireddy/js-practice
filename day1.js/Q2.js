// Swap two numbers
    //  let a = 5;
    //  let b = 9;

    // let temp = a;
    //  a=b;
    //  b=temp;

    //  console.log("After swapping");
    //  console.log("a = "+a);
    //  console.log("b = "+b);
   

//Without a temporary variable.
    //  let a=5;
    //  let b=9;
    

    //  a = a+b;
    //  b = a-b;
    //  a = a-b;

    //  console.log("After swapping");
    //  console.log("a = "+a);
    //  console.log("b = "+b);
   
// ES6 Destructuring Method (Best and Modern Way)
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("After swapping:");
console.log("a = "+a); // 10
console.log("b = "+b); // 5


