// Use reduce to calculate factorial of a given number from an array of first n natural number (n beings the number whose factorial needs to be calculated )
let array = [1,2,3,4];
let n = array.reduce((x1,x2) =>{
    return x1 * x2;
});
console.log(n);