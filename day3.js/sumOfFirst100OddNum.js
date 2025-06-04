// Sum of first 100 odd Numbers.

// for loop
/*let sum = 0;
for(let i=0;i<=100;i++){
    if(i%2 !== 0){
        sum +=i;
    }
}
console.log("By Using for loop")
console.log("The of first 100 Odd numbers is:" + sum);*/

// While loop
/*let sum=0 ,i=0;
while(i<=100){
    if(i%2 !==0){
        sum +=i;
    }
    i++;
}
console.log("By Using While loop");
console.log("The of first 100 Odd numbers is:" + sum);*/

//Do-While loop
let i = 1;
let sum = 0;

do {
    if (i % 2 !== 0) {
        sum += i;
    }
    i++;
} while (i <= 100);
console.log("By Using Do-While loop");
console.log("Sum of odd numbers from 1 to 100 is:", sum);
