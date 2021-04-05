function read(input) {
    let i = 0;
    while (input[i] != "Stop") {
        console.log(input[i]);
        i++;
    }
}


function password(input) {
    let account = input[0];
    let password = input[1];
    let i = 2;
    while (i < input.length) {
        if (input[i] == password) {
            console.log(`Welcome ${account}!`); break;
        }
        else {
            i++;
        }
    }
}


function summing(input) {
    let required = input[0];
    let i = 1;
    let sum = 0;
    while (sum < required) {
        sum += Number(input[i]);
        i++;
    }
    console.log(sum);
}


function tkp1(input) {
    let n = Number(input[0]);
    let i = 0;
    while (i < n) {
        if ((i * 2 + 1) > n) {
            break;
        }
        i = i * 2 + 1;
        console.log(i);
    }
}


function balance(input) {
    let i = 0;
    let sum = 0;
    while (i < input.length) {
        if (input[i] == "NoMoreMoney") {
            break;
        }
        if (Number(input[i] <= 0)) {
            console.log(`Invalid operation!`);
        }
        else {
            sum += Number(input[i]);
            console.log(`Increase: ${(Number(input[i])).toFixed(2)}`);
        }
        i++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}


function greatest(input) {
    let n = Number(input[0]);
    let i = 1;
    while (input[i] !== "Stop") {
        if (n > Number(input[i])) {
            n = Number(input[i]);
        }
        else {
            i++;
        }
    }
    console.log(n);
}


function graduation(input) {
    let name = input[0];
    let sum = 0;
    let years = 0;
    let repeat = 0;
    let i = 1;
    while (i <= (input.length - 1)) {
        let grade = Number(input[i]);
        sum += grade;
        years++;
        if (grade < 4) {
            repeat++;
        }
        if (repeat >= 2) {
            break;
        }
        i++;
    }
    let average = (sum / years).toFixed(2);
    if (repeat < 2) {
        console.log(`${name} graduated. Average grade: ${average}`);
    }
    else if (repeat >= 2) {
        console.log(`${name} has been excluded at ${years - 1} grade`);
    }
}


function moving(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);
    let i = 3;
    let v = w * l * h;
    let luggage = 0;
    while (input[i] !== "Done") {
        luggage += Number(input[i]);
        i++;
        if (luggage > v) {
            break;
        }
    }
    let f = v - luggage;
    if (luggage <= v) {
        console.log(`${f} Cubic meters left.`);
    }
    else {
        console.log(`No more free space! You need ${luggage - v} Cubic meters more.`);
    }
}