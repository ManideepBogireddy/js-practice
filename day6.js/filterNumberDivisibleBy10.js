// filter for number divisible by 10 fron a given array.
let array= [1 , 10 ,20 ,22, 33, 110, 2240];
let newArray = array.filter((x) =>{
    return x%10 == 0;
});
console.log(newArray);