//  Find max/min
let arr =[ "mani"  , "srinu" , "anand" , "manideep" ,"srinivasraju"];
console.log(arr);
let maxArray = arr.reduce((a , b) => (a > b ? a:b));
let minArray = arr.reduce((a , b) => (a < b ? a:b));
console.log("Max Name:", maxArray);
console.log("Min Name:", minArray);


