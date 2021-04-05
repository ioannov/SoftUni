function cinema(input) {
    let type = input[0];
    let rows = input[1];
    let columns = input[2];
    let income = 0;
    let premiere = rows * columns * 12;
    let normal = rows * columns * 7.5;
    let discount = rows * columns * 5;
    if (type == "Premiere") {
        income = premiere;
    }
    else if (type == "Normal") {
        income = normal;
    }
    else if (type == "Discount") {
        income = discount;
    }
    console.log(`${income.toFixed(2)} leva`);
}


function summer(input) {
    let t = Number(input[0]);
    let part = input[1];
    let outfit;
    let shoes;
    switch (part) {
        case "Morning":
            if (t >= 10 && t <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers"
            }
            else if (t > 18 && t <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
            else {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }; break;
        case "Afternoon":
            if (t >= 10 && t <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins"
            }
            else if (t > 18 && t <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            else {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }; break;
        case "Evening":
            outfit = "Shirt";
            shoes = "Moccasins"; break;
    }
    console.log(`It's ${t} degrees, get your ${outfit} and ${shoes}.`)
}


function house(input) {
    let type = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);

    let roses = 5;
    let dahlias = 3.8;
    let tulips = 2.8;
    let narcissus = 3;
    let gladiolus = 2.5;

    let cost = 0;

    if (type == "Roses") {
        cost = quantity * roses;
        if (quantity > 80) {
            cost = cost * 0.9;
        }
    }
    else if (type == "Dahlias") {
        cost = quantity * dahlias;
        if (quantity > 90) {
            cost = cost * 0.85;
        }
    }
    else if (type == "Tulips") {
        cost = quantity * tulips;
        if (quantity > 80) {
            cost = cost * 0.85;
        }
    }
    else if (type == "Narcissus") {
        cost = quantity * narcissus;
        if (quantity < 120) {
            cost = cost * 1.15;
        }
    }
    else if (type == "Gladiolus") {
        cost = quantity * gladiolus;
        if (quantity < 80) {
            cost = cost * 1.2;
        }
    }

    if (cost <= budget) {
        console.log(`Hey, you have a great garden with ${quantity} ${type} and ${(budget - cost).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money, you need ${(cost - budget).toFixed(2)} leva more.`);
    }
}


function fishing(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let price = 0;

    if (season == "Spring") {
        price += 3000;
    }
    else if (season == "Summer" || season == "Autumn") {
        price += 4200;
    }
    else if (season == "Winter") {
        price += 2600;
    }

    if (fishermen <= 6) {
        price = price * 0.9;
    }
    else if (fishermen > 6 && fishermen <= 11) {
        price = price * 0.85;
    }
    else if (fishermen >= 12) {
        price = price * 0.75;
    }

    if (fishermen % 2 == 0 && season != "Autumn") {
        price = price * 0.95;
    }

    if (price <= budget) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`)
    }
}


function travel(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let country;
    let type;
    let cost = 0;
    if (budget <= 100) {
        country = "Bulgaria"
        if (season == "summer") {
            type = "Camp";
            cost = budget * 0.3;
        }
        else {
            type = "Hotel";
            cost = budget * 0.7;
        }
    }
    else if (budget > 100 && budget <= 1000) {
        country = "Balkans";
        if (season == "summer") {
            type = "Camp";
            cost = budget * 0.4;
        }
        else {
            type = "Hotel";
            cost = budget * 0.8;
        }
    }
    else if (budget > 1000) {
        country = "Europe";
        type = "Hotel";
        cost = budget * 0.9;
    }
    console.log(`Somewhere in ${country}`);
    console.log(`${type} - ${cost.toFixed(2)}`);
}


function operations(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let type;
    if (operator == "+" || operator == "-" || operator == "*") {
        if (operator == "+") {
            result = n1 + n2;
        }
        else if (operator == "-") {
            result = n1 - n2;
        }
        else if (operator == "*") {
            result = n1 * n2;
        }
        if (result % 2 == 0) {
            type = "even";
        }
        else {
            type = "odd";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`);
    }
    else if (operator == "/" || operator == "%") {
        if (n2 != 0) {
            if (operator == "/") {
                result = (n1 / n2).toFixed(2);
            }
            else if (operator == "%") {
                result = n1 % n2;
            }
            console.log(`${n1} ${operator} ${n2} = ${result}`);
        }
        else {
            console.log(`Cannot divide ${n1} by zero`);
        }
    }
}


function hotel(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let studio = 0;
    let apartment = 0;
    let discount = 0;
    if (month == "May" || month == "October") {
        studio = 50;
        apartment = 65;
        if (nights > 7 && nights <= 14) {
            studio = studio * 0.95;
        }
        else if (nights > 14) {
            studio = studio * 0.7;
            apartment = apartment * 0.9;
        }
    }
    else if (month == "June" || month == "September") {
        studio = 75.2;
        apartment = 68.7;
        if (nights > 14) {
            studio = studio * 0.8;
            apartment = apartment * 0.9;
        }
    }
    else if (month == "July" || month == "August") {
        studio = 76;
        apartment = 77;
        if (nights > 14) {
            apartment = apartment * 0.9;
        }
    }
    console.log(`Apartment: ${(apartment * nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio * nights).toFixed(2)} lv.`);
}


function exam(input) {
    let examHours = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHours = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let examConverted = examHours * 60 + examMinutes;
    let arrivalConverted = arrivalHours * 60 + arrivalMinutes;

    let status;
    let difference;
    let result;

    if (arrivalConverted > examConverted) {
        difference = arrivalConverted - examConverted;
        status = "Late";
    }
    else if (arrivalConverted <= examConverted && (examConverted - arrivalConverted <= 30)) {
        difference = examConverted - arrivalConverted;
        status = "On time";
    }
    else if (arrivalConverted <= examConverted && (examConverted - arrivalConverted > 30)) {
        difference = examConverted - arrivalConverted;
        status = "Early";
    }

    let hoursResult = Math.floor(difference / 60);
    let minutesResult = difference % 60;

    if (status == "Late") {
        if (difference <= 59) {
            result = `${difference} minutes after the start`
        }
        else {
            if (minutesResult < 10) {
                result = `${hoursResult}:0${minutesResult} hours after the start`;
            }
            else {
                result = `${hoursResult}:${minutesResult} hours after the start`;
            }
        }
    }
    else if (status == "On time") {
        result = `${difference} minutes before the start`
    }
    else if (status == "Early") {
        if (difference <= 59) {
            result = `${difference} minutes before the start`
        }
        else {
            if (minutesResult < 10) {
                result = `${hoursResult}:0${minutesResult} hours before the start`;
            }
            else {
                result = `${hoursResult}:${minutesResult} hours before the start`;
            }
        }
    }
    if (difference == 0 && status == "On time") {
        console.log(status)
    }
    else {
        console.log(status);
        console.log(result);
    }
    console.log("---")
}


function volleyball(input) {
    let year = input[0];
    let holidays = Number(input[1]);
    let travel = Number(input[2]);

    let games = ((48 - travel) * 3 / 4) + travel + (holidays * 2 / 3);

    if (year == "leap") {
        games = games * 1.15;
    }

    console.log(Math.floor(games));
}