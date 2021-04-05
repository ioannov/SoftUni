function christmas(input) {
    let price = (input[0] * 5.8 + input[1] * 7.2 + input[2] * 1.2) * (100 - input[3]) / 100;
    console.log(price.toFixed(3));
}


function stand(input) {
    let allowance = Number(input[0]);
    let daily = Number(input[1]);
    let expenses = Number(input[2]);
    let price = Number(input[3]);
    let profit = (allowance + daily) * 5;
    let difference = profit - expenses - price;
    if (difference >= 0) {
        console.log(`Profit: ${(profit - expenses).toFixed(2)} BGN, the gift has been purchased.`);
    }
    else {
        console.log(`Insufficient money: ${Math.abs(difference).toFixed(2)} BGN.`);
    }
}


function competition(input) {
    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let prize = 0;
    let charity = 0;
    let winnings = 0;
    if (place == "Bulgaria") {
        prize = dancers * points;
        switch (season) {
            case "summer": prize *= 0.95; break;
            case "winter": prize *= 0.92; break;
        }
    }
    else if (place == "Abroad") {
        prize = (dancers * points) * 1.5;
        switch (season) {
            case "summer": prize *= 0.9; break;
            case "winter": prize *= 0.85; break;
        }
    }
    charity = prize * 0.75;
    winnings = (prize * 0.25) / dancers;
    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${winnings.toFixed(2)}`);
}


function firm(input) {
    let n = Number(input.shift());
    let tsales = 0;
    let arating = 0;
    while (input.length > 0) {
        let info = Number(input.shift());
        let rating = info % 10;
        arating += rating
        let psales = (info - rating) / 10;
        let asales = 0;
        switch (rating) {
            case 2: asales = 0; break;
            case 3: asales = psales * 0.5; break;
            case 4: asales = psales * 0.7; break;
            case 5: asales = psales * 0.85; break;
            case 6: asales = psales; break;
        }
        tsales += asales;
    }
    console.log(tsales.toFixed(2));
    console.log((arating / n).toFixed(2));
}


function sale(input) {
    let tsea = Number(input.shift());
    let tmountain = Number(input.shift());
    let profit = 0;
    while (input.length > 0 && input[0] !== "Stop") {
        let packet = input.shift();
        switch (packet) {
            case "sea":
                if (tsea > 0) {
                    profit += 680;
                    tsea -= 1;
                    break;
                }
                else {
                    break;
                }
            case "mountain":
                if (tmountain > 0) {
                    profit += 499;
                    tmountain -= 1;
                    break;
                }
                else {
                    break;
                }
            default: profit += 0; break;
        }
    }
    if (tsea == 0 && tmountain == 0) {
        console.log(`Good job! Everything is sold.`)
    }
    console.log(`Profit: ${profit} leva.`)
}


function table(input) {
    let n = String(input.shift());
    let arr = n.split("");
    let first = Number(arr[2]);
    let second = Number(arr[1]);
    let third = Number(arr[0]);
    for (let i = 1; i <= first; i++) {
        for (let j = 1; j <= second; j++) {
            for (let k = 1; k <= third; k++) {
                console.log(`${i} * ${j} * ${k} = ${i * j * k};`);
            }
        }
    }
}