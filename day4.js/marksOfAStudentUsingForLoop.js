// Write program to print the marks of a student in an object using for loop.
let marks = {
    Manideep:94,
    Srinu:56,
    Anand:64,
    Himal:5
}

for(let i=0;i<Object.keys(marks).length;i++)
{
    console.log("The marks of "+ Object.keys(marks)[i] + " are "+ marks[Object.keys(marks)[i]]);
}