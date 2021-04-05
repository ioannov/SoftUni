function pool(input) {
    let people = Number(input[0]);
    let fee = Number(input[1]);
    let shezlong = Number(input[2]);
    let umbrella = Number(input[3]);
    let sum = people * fee + Math.ceil(people / 2) * umbrella + Math.ceil(people * 0.75) * shezlong;
    console.log(sum.toFixed(2) + " lv.");
}


function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);
    let materials = (nylon + 2) * 1.5 + (paint * 1.1) * 14.5 + thinner * 5 + 0.4;
    let labor = materials * 0.3 * hours;
    let sum = materials + labor;
    console.log(`Total expenses: ${sum.toFixed(2)} lv.`);
}


function trip(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let price = Number(input[2]);
    let additional = Number(input[3]);
    if (nights > 7) {
        price *= 0.95;
    }
    let expenses = nights * price + budget * additional / 100;
    if (budget >= expenses) {
        console.log(`Ivanovi will be left with ${(budget - expenses).toFixed(2)} leva after vacation.`);
    }
    else {
        console.log(`${(expenses - budget).toFixed(2)} leva needed.`);
    }
}


function shopping(input) {
    let budget = Number(input[0]);
    let cards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);
    let pcards = cards * 250;
    let pprocessors = pcards * 0.35 * processors;
    let pram = pcards * 0.1 * ram;
    let sum = pcards + pprocessors + pram;
    if (cards > processors) {
        sum *= 0.85;
    }
    if (budget >= sum) {
        console.log(`You have ${(budget - sum).toFixed(2)} leva left!`);
    }
    else {
        console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`);
    }
}


function coffee(input) {
    let drink = input[0];
    let sugar = input[1];
    let quantity = Number(input[2]);
    let price;
    if (drink == "Espresso") {
        switch (sugar) {
            case "Without": price = 0.9; break;
            case "Normal": price = 1; break;
            case "Extra": price = 1.2; break;
        }
    }
    else if (drink == "Cappuccino") {
        switch (sugar) {
            case "Without": price = 1; break;
            case "Normal": price = 1.2; break;
            case "Extra": price = 1.6; break;
        }
    }
    else if (drink == "Tea") {
        switch (sugar) {
            case "Without": price = 0.5; break;
            case "Normal": price = 0.6; break;
            case "Extra": price = 0.7; break;
        }
    }
    let cost = quantity * price;
    let ncost = cost;
    if (sugar == "Without") {
        ncost *= 0.65;
    }
    if (drink == "Espresso" && quantity >= 5) {
        ncost *= 0.75;
    }
    if (cost >= 15) {
        ncost *= 0.8;
    }
    console.log(`You bought ${quantity} cups of ${drink} for ${ncost.toFixed(2)} lv.`)
}


function agency(input) {
    let town = input[0];
    let packet = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let price;
    let incorrect = 0;
    if (days < 1) {
        console.log("Days must be positive number!");
    }
    else {
        if (town == "Bansko" || town == "Borovets") {
            if (packet == "withEquipment") {
                price = 100;
                if (vip == "yes") {
                    price *= 0.9;
                }
            }
            else if (packet = "noEquipment") {
                price = 80;
                if (vip == "yes") {
                    price *= 0.95;
                }
            }
            else {
                incorrect++;
            }
        }
        else if (town == "Varna" || town == "Burgas") {
            if (packet == "withBreakfast") {
                price = 130;
                if (vip == "yes") {
                    price *= 0.88;
                }
            }
            else if (packet = "noBreakfast") {
                price = 100;
                if (vip == "yes") {
                    price *= 0.93;
                }
            }
            else {
                incorrect++;
            }
        }
        else {
            incorrect++;
        }
        if (incorrect == 0) {
            let sum = days * price;
            if (days > 7) {
                sum -= price;
            }
            console.log(`The price is ${(sum).toFixed(2)}lv! Have a nice time!`);
        }
        else {
            console.log("Invalid input!");
        }
    }
}


function club(input) {
    let desired = input.shift();
    let cost = 0;
    let price = 0;
    while (input.length > 0) {
        if (input[0] == "Party!") {
            break;
        }
        let drink = input.shift();
        let quantity = input.shift();
        price += drink.length * quantity;
        if (price % 2 !== 0) {
            price *= 0.75;
        }
        cost += price;
        price = 0;
    }
    if (cost >= desired) {
        console.log(`Target acquired.`);
    }
    else {
        console.log(`We need ${(desired - cost).toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${(cost).toFixed(2)} leva.`);
}


function renovation(input) {
    let h = input.shift();
    let w = input.shift();
    let e = input.shift();
    let remaining = Math.ceil(h * w * 4 * ((100 - e) / 100));
    while (input.length > 0) {
        if (input[0] == "Tired!") {
            break;
        }
        let paint = input.shift();
        remaining -= paint;
    }
    if (remaining > 0) {
        console.log(`${remaining} quadratic m left.`);
    }
    else {
        console.log(`All walls are painted and you have ${Math.abs(remaining)} l paint left!`);
    }
}


function gameshop(input) {
    let sold = input.shift();
    let hs = 0;
    let fn = 0;
    let ow = 0;
    let ot = 0;
    while (input.length > 0) {
        let game = input.shift();
        switch (game) {
            case "Hearthstone": hs++; break;
            case "Fornite": fn++; break;
            case "Overwatch": ow++; break;
            default: ot++; break;
        }
    }
    console.log(`Hearthstone - ${(hs / sold * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(fn / sold * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(ow / sold * 100).toFixed(2)}%`);
    console.log(`Others - ${(ot / sold * 100).toFixed(2)}%`);
}


function tournament(input) {
    let team = input.shift();
    let games = input.shift();
    let w = 0;
    let d = 0;
    let l = 0;
    if (games < 1) {
        console.log(`${team} hasn't played any games during this season.`);
    }
    else {
        for (let i = 0; i < input.length; i++) {
            switch (input[i]) {
                case "W": w++; break;
                case "D": d++; break;
                case "L": l++; break;
            }
        }
        let points = w * 3 + d;
        let wr = w / games * 100;
        console.log(`${team} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${w}`);
        console.log(`## D: ${d}`);
        console.log(`## L: ${l}`);
        console.log(`Win rate: ${wr.toFixed(2)}%`);

    }
}


function ng(input) {
    let name = input[0];
    for (let i = 1; i < input.length; i++) {
        let namearr = [];
        namearr.split("");
    }

}
ng(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
ng(["Pesho", "124", "34", "111", "97", "99", "Gosho", "98", "124", "88", "76", "18", "Stop"]);


function mostPowerfulWord(input) {
    let a = 0;
}
mostPowerfulWord();