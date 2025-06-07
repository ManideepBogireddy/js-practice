// create an array of square of given numbers.
let array =  [2,4,6,8];
console.log("Before:"+array);
let newArray = array.map((x) =>{
    return x*x;
});
console.log("After:" +newArray);