function clock() {
    for (h = 0; h <= 23; h++) {
        for (m = 0; m <= 59; m++) {
            console.log(`${h}:${m}`);
        }
    }
}


function table() {
    for (a = 1; a <= 10; a++) {
        for (b = 1; b <= 10; b++) {
            console.log(`${a} * ${b} = ${a * b}`);
        }
    }
}


function combinations(input) {
    let n = Number(input[0]);
    let c = 0;
    for (x1 = 0; x1 <= 25; x1++) {
        for (x2 = 0; x2 <= 25; x2++) {
            for (x3 = 0; x3 <= 25; x3++) {
                let equation = x1 + x2 + x3;
                if (equation == n) {
                    c++;
                }
            }
        }
    }
    console.log(c);
}


function sums(input) {
    let int1 = Number(input[0]);
    let int2 = Number(input[1]);
    let mag = Number(input[2]);
    let i1 = 0;
    let i2 = 0;
    let result = 0;
    let combinations = 0;
    for (i1 = int1; i1 <= int2; i1++) {
        for (i2 = int1; i2 <= int2; i2++) {
            result = i1 + i2;
            combinations++;
            if (result == mag) {
                break;
            }
        }
        if (result == mag) {
            break;
        }
    }
    if (result == mag) {
        console.log(`Combination N:${combinations} (${i1} + ${i2} = ${result})`);
    }
    else {
        console.log(`${combinations} combinations - neither equals ${mag}`);
    }
}


function travel(input) {
    let destination = input[0];
    let cost = Number(input[1]);
    let money = 0;
    for (i = 2; i <= input.length; i++) {
        if (input[i] == "End") {
            break;
        }
        if (isNaN(input[i])) {
            if (money >= cost) {
                console.log(`Going to ${destination}!`);
            }
            money = 0;
            destination = input[i];
            cost = input[i + 1];
        }
        else {
            money += Number(input[i]);
        }
    }
    if (money >= cost) {
        console.log(`Going to ${destination}!`);
    }
}


function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let rows = "";
    let columns = "";
    let type = "";
    let f = 0;
    let r = 0;
    for (f = floors; f > 0; f--) {
        for (r = 0; r < rooms; r++) {
            if (f == floors) {
                type = "L";
            }
            else if (f % 2 == 0 && f !== floors) {
                type = "O";
            }
            else if (f % 2 !== 0) {
                type = "A";
            }
            rows += `${type}${f}${r} `;
        }
        rows += "\n"
    }
    console.log(rows)
}


function cinema(input) {
    let movie = input[0];
    let vacant = Number(input[1]);
    let standardTotal = 0;
    let studentTotal = 0;
    let kidTotal = 0;
    let sold = 0;
    let soldTotal = 0;
    let i = 2;
    while (i <= input.length) {
        while (sold < vacant) {
            if (input[i] == "standard") {
                standardTotal++;
                sold++;
            }
            else if (input[i] == "student") {
                studentTotal++;
                sold++;
            }
            else if (input[i] == "kid") {
                kidTotal++;
                sold++;
            }
            else if (input[i] == "End" || input[i] == "Finish" || !isNaN(input[i + 1]) || i == input.length) {
                break;
            }
            i++;
        }
        console.log(`${movie} - ${(sold / vacant * 100).toFixed(2)}% full.`);
        soldTotal += sold;
        sold = 0;
        while (isNaN(input[i])) {
            if (i == input.length) {
                break;
            }
            i++;
        }
        movie = input[i - 1];
        vacant = Number(input[i]);
        i++;
    }
    console.log(`Total tickets: ${soldTotal}`);
    if (soldTotal == 0) {
        console.log(`0.00% student tickets.`);
        console.log(`0.00% standard tickets.`);
        console.log(`0.00% kids tickets.`);
    }
    else {
        console.log(`${(studentTotal / soldTotal * 100).toFixed(2)}% student tickets.`);
        console.log(`${(standardTotal / soldTotal * 100).toFixed(2)}% standard tickets.`);
        console.log(`${(kidTotal / soldTotal * 100).toFixed(2)}% kids tickets.`);
    }
}


function tournament(input) {
    let days = Number(input[0]);
    let daysWon = 0;
    let daysLost = 0;
    let gamesWon = 0;
    let gamesLost = 0;
    let dayMoney = 0;
    let moneyTotal = 0;
    let i = 1;
    while (i <= input.length) {
        if (input[i + 1] == "win") {
            gamesWon += 1;
            dayMoney += 20;
        }
        else if (input[i + 1] == "lose") {
            gamesLost += 1;
        }
        if (input[i] == "Finish") {
            if (gamesWon > gamesLost) {
                daysWon += 1;
                dayMoney = dayMoney * 1.1;
                moneyTotal += dayMoney;
            }
            else if (gamesWon <= gamesLost) {
                daysLost += 1;
                moneyTotal += dayMoney;
            }
            gamesWon = 0;
            gamesLost = 0;
            dayMoney = 0;
        }
        i += 1;
    }
    if (daysWon > daysLost) {
        moneyTotal = moneyTotal * 1.2;
        console.log(`You won the tournament! Total raised money: ${moneyTotal.toFixed(2)}`);
    }
    else if (daysWon <= daysLost) {
        console.log(`You lost the tournament! Total raised money: ${moneyTotal.toFixed(2)}`);
    }
}