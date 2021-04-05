function grade(input) {
    let g = Number(input[0]);
    if (g >= 5.5) {
        console.log("Excellent!");
    }
}


function greaterNumber(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    if (a > b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}


function evenOrOdd(input) {
    let number = Number(input[0]);
    if (number % 2 == 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}


function squareArea(input) {
    let figure = input[0];
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    let result = 0;
    if (figure == "square") {
        result = sideA * sideA;
    }
    else if (figure == "rectangle") {
        result = sideA * sideB;
    }
    else if (figure == "circle") {
        result = sideA * sideA * Math.PI;
    }
    else if (figure == "triangle") {
        result = (sideA * sideB) / 2;
    }
    console.log(result);
}


function from100to200(input) {
    let number = Number(input[0]);
    if (number < 100) {
        console.log("Less than 100");
    }
    else if (number >= 100 && number <= 200) {
        console.log("Between 100 and 200");
    }
    else (console.log("Greater than 200"));
}


function password(input) {
    let pass = input[0];
    if (pass == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    }
    else (console.log("Wrong password!"));
}


function toyStore(input) {
    let vacationCost = Number(input[0]);
    let puzzlesQuantity = Number(input[1]);
    let dollsQuantity = Number(input[2]);
    let bearsQuantity = Number(input[3]);
    let minionsQuantity = Number(input[4]);
    let trucksQuantity = Number(input[5]);
    let toysSold = puzzlesQuantity + dollsQuantity + bearsQuantity + minionsQuantity + trucksQuantity;
    let income = puzzlesQuantity * 2.6 + dollsQuantity * 3 + bearsQuantity * 4.1 + minionsQuantity * 8.2 + trucksQuantity * 2;
    let incomeFinal = 0;
    if (toysSold >= 50) {
        incomeFinal = income * 0.75 * 0.9;
    }
    else (incomeFinal = income * 0.9);
    if (incomeFinal >= vacationCost) {
        console.log(`Yes! ${(incomeFinal - vacationCost).toFixed(2)} lv left.`)
    }
    else (console.log(`Not enough money! ${(vacationCost - incomeFinal).toFixed(2)} lv needed.`));
}