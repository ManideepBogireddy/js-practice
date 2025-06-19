// Extract the amount from string.
let str = "please give Rs 1000";
let amount = Number.parseInt(str.slice("please give Rs ".length));
console.log(amount);