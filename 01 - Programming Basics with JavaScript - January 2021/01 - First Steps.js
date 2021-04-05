function hello() {
    console.log("Hello SoftUni");
}


function numsFrom1to10() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}


function readName(input) {
    let name = input;
    console.log(name);
}


function squareArea(input) {
    let a = Number(input);
    let area = a * a;
    console.log(area);
}


function greeting(name) {
    console.log("Hello, " + name + "!");
}


function subtract(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let result = a - b;
    console.log(result);
}


function info(firstName, lastName, age, town) {
    let result = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`
    console.log(result);
}


function personalInfo(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}


function inchToCM(inches) {
    let i = Number(inches);
    let cm = i * 2.54;
    console.log(cm);
}


function architect(input) {
    let name = input[0];
    let projects = Number(input[1]);
    let hours = projects * 3;
    let result = `The architect ${name} will need ${hours} hours to complete ${projects} project/s.`
    console.log(result);
}


function zoo(input) {
    let dogs = Number(input[0]);
    let others = Number(input[1]);
    let result = dogs * 2.5 + others * 4 + " lv.";
    console.log(result);
}


function greening(sqm) {
    let m = Number(sqm);
    let price = m * 7.61
    let discount = price * 0.18;
    let final = price - discount;
    console.log(`The final price is: ${final} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}