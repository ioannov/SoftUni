function library(input) {
    let book = input[0];
    let searched = 0;
    let found = 0;
    let i = 1;
    while (input[i] !== "No More Books") {
        if (input[i] == book) {
            found += 1; break;
        }
        searched++;
        i++;
    }
    if (found == 1) {
        console.log(`You checked ${searched} books and found it.`);
    }
    else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${searched} books.`);
    }
}


function exam(input) {
    let failsAllowed = Number(input[0]);
    let problemName = "";
    let grade = 0;
    let problemGradeCount = 0;
    let gradeSum = 0;
    let failsTotal = 0;
    let i = 1;
    while (input[i] !== "Enough") {
        problemName = input[i];
        grade = Number(input[i + 1]);
        problemGradeCount++;
        if (grade <= 4) {
            failsTotal++;
        }
        if (failsTotal >= failsAllowed) {
            break;
        }
        gradeSum += grade;
        i += 2;
    }
    let average = (gradeSum / problemGradeCount).toFixed(2);
    if (failsTotal < failsAllowed) {
        console.log(`Average score: ${average}`);
        console.log(`Number of problems: ${problemGradeCount}`)
        console.log(`Last problem: ${problemName}`);
    }
    else {
        console.log(`You need a break, ${failsTotal} poor grades.`);
    }
}


function vacation(input) {
    let cost = Number(input[0]);
    let initial = Number(input[1]);
    let action = "";
    let sum = 0;
    let days = 0;
    let i = 2;
    while (i < input.length) {
        days++;
        action = input[i];
        sum = Number(input[i + 1]);
        if (action == "spend") {
            initial -= sum;
        }
        else if (action == "save") {
            initial += sum;
        }
        if (initial <= 0) {
            initial = 0;
        }
        if (initial >= cost) {
            break;
        }
        i += 2;
    }
    if (initial >= cost) {
        console.log(`You saved the money for ${days} days.`);
    }
    else if (initial < cost) {
        console.log(`You can't save the money.`);
        console.log(days);
    }
}


function steps(input) {
    let total = 0;
    let i = 0;
    while (i < input.length) {
        if (input[i] == "Going home") {
            i++;
        }
        total += Number(input[i]);
        i++;
    }
    if (total >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${total - 10000} steps over the goal!`);
    }
    else {
        console.log(`${10000 - total} more steps to reach goal.`);
    }
}


function coins(input) {
    let paid = Number(input[0]);
    let cents = (paid * 100).toFixed(0);
    let returned = 0;
    while (cents > 0) {
        if (cents >= 200) {
            cents -= 200;
        }
        else if (cents >= 100) {
            cents -= 100;
        }
        else if (cents >= 50) {
            cents -= 50;
        }
        else if (cents >= 20) {
            cents -= 20;
        }
        else if (cents >= 10) {
            cents -= 10;
        }
        else if (cents >= 5) {
            cents -= 5;
        }
        else if (cents >= 2) {
            cents -= 2;
        }
        else if (cents >= 1) {
            cents -= 1;
        }
        returned++;
    }
    console.log(returned);
}


function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let size = width * length;
    let pieces = 0;
    let i = 2;

    while (input[i] !== "STOP" && i < input.length) {
        pieces = Number(input[i]);
        size -= pieces;
        i++
    }

    if (size >= 0) {
        console.log(`${size} pieces are left.`);
    }
    else {
        console.log(`No more cake left! You need ${size * -1} pieces more.`);
    }
}