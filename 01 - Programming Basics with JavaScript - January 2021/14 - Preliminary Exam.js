function moon(input) {
    let avgspd = Number(input[0])
    let lph = Number(input[1]);
    let hours = Math.ceil(384400 * 2 / avgspd) + 3;
    let fuel = 384400 * 2 / 100 * lph;
    console.log(hours);
    console.log(fuel)
}


function spaceship(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);
    let avgh = Number(input[3]);
    let ss = w * l * h;
    let room = (avgh + 0.4) * 2 * 2;
    let rooms = Math.floor(ss / room);
    if (rooms >= 3 && rooms <= 10) {
        console.log(`The spacecraft holds ${rooms} astronauts.`);
    }
    else if (rooms < 3) {
        console.log(`The spacecraft is too small.`);
    }
    else if (rooms > 10) {
        console.log(`The spacecraft is too big.`);
    }
}


function catlife(input) {
    let breed = input[0];
    let gender = input[1];
    let age = 0;
    let incorrect = 0;
    if (breed == "British Shorthair") {
        switch (gender) {
            case "m": age = 13; break;
            case "f": age = 14; break;
        }
    }
    else if (breed == "Siamese") {
        switch (gender) {
            case "m": age = 15; break;
            case "f": age = 16; break;
        }
    }
    else if (breed == "Persian") {
        switch (gender) {
            case "m": age = 14; break;
            case "f": age = 15; break;
        }
    }
    else if (breed == "Ragdoll") {
        switch (gender) {
            case "m": age = 16; break;
            case "f": age = 17; break;
        }
    }
    else if (breed == "American Shorthair") {
        switch (gender) {
            case "m": age = 12; break;
            case "f": age = 13; break;
        }
    }
    else if (breed == "Siberian") {
        switch (gender) {
            case "m": age = 11; break;
            case "f": age = 12; break;
        }
    }
    else {
        incorrect += 1;
    }
    if (incorrect == 0) {
        let cm = age * 12 / 6;
        console.log(`${cm} cat months`);
    }
    else {
        console.log(`${breed} is invalid cat!`);
    }
}


function santa(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);
    let arr = [];
    for (let i = m; i >= n; i--) {
        if (i % 2 == 0 && i % 3 == 0) {
            if (i == s) {
                break;
            }
            arr.push(i);
        }
    }
    console.log(arr.join(" "));
}


function puppy(input) {
    let tf = Number(input.shift()) * 1000;
    while (input[0] != "Adopted") {
        tf -= input.shift();
    }
    if (tf >= 0) {
        console.log(`Food is enough! Leftovers: ${tf} grams.`);
    }
    else {
        console.log(`Food is not enough. You need ${Math.abs(tf)} grams more.`);
    }
}


function gold(input) {
    let locations = Number(input.shift());
    while (input.length > 0) {
        let expectedAverage = Number(input.shift());
        let days = Number(input.shift());
        let daysUse = days;
        let currentLocationGold = 0;
        while (days > 0) {
            let dailyGold = Number(input.shift());
            currentLocationGold += dailyGold;
            days--;
        }
        let averagePerDay = (currentLocationGold / daysUse).toFixed(2);
        if (averagePerDay >= expectedAverage) {
            console.log(`Good job! Average gold per day: ${averagePerDay}.`);
        }
        else {
            console.log(`You need ${(expectedAverage - averagePerDay).toFixed(2)} gold.`);
        }
    }
}