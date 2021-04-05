function from100to1(input) {
    let i = Number(input[0]);
    for (let a = i; a >= 1; a--) {
        console.log(a);
    }
}


function from1to100() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}


function from1toNstep3(input) {
    let n = Number(input[0]);
    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}


function evenPowers(input) {
    let n = Number(input[0]);
    let num = 1;
    for (let i = 0; i <= n; i += 2) {
        console.log(num);
        num = num * 2 * 2;
    }
}


function write(input) {
    let text = input[0];
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
    }
}


function vowels(input) {
    let text = input[0];
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        switch (text.charAt(i)) {
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
        }
    }
    console.log(sum);
}


function sumOfNumbers(input) {
    let number = input[0].toString();
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}


function nine(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;
    let numbers = "";
    for (let i = n; i < m; i++) {
        if (i % 9 == 0) {
            sum += i;
            numbers = numbers + i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(numbers);
}


function lilly(input) {
    let age = Number(input[0]);
    let price = Number(input[1]);
    let toy = Number(input[2]);
    let savings = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 != 0) {
            savings += toy;
        }
        else {
            savings += 10 * (i / 2) - 1;
        }
    }
    if (savings > price) {
        console.log(`Yes! ${(savings - price).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(price - savings).toFixed(2)}`);
    }
}