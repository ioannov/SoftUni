function numToWeekDay(input) {
    let day = Number(input[0]);
    switch (day) {
        case 1:
            console.log("Monday"); break;
        case 2:
            console.log("Tuesday"); break;
        case 3:
            console.log("Wednesday"); break;
        case 4:
            console.log("Thursday"); break;
        case 5:
            console.log("Friday"); break;
        case 6:
            console.log("Saturday"); break;
        case 7:
            console.log("Sunday"); break;
        default:
            console.log("Error"); break;
    }
}


function weekDayToType(input) {
    let day = input[0];
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day"); break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend"); break;
        default:
            console.log("Error"); break;
    }
}


function fruitOrVegetable(input) {
    let name = input[0];
    switch (name) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit"); break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable"); break;
        default:
            console.log("unknown");
    }
}


function greeting(input) {
    let age = Number(input[0]);
    let sex = input[1];
    if (sex == "m") {
        if (age < 16) {
            console.log("Master");
        }
        else { console.log("Mr."); }
    }
    else {
        if (age < 16) {
            console.log("Miss");
        }
        else { console.log("Ms."); }
    }
}


function store(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    if (city == "Sofia") {
        if (product == "coffee") {
            price += 0.5;
        }
        else if (product == "water") {
            price += 0.8;
        }
        else if (product == "beer") {
            price += 1.2;
        }
        else if (product == "sweets") {
            price += 1.45;
        }
        else if (product == "peanuts") {
            price += 1.6;
        }
    }
    else if (city == "Plovdiv") {
        if (product == "coffee") {
            price += 0.4;
        }
        else if (product == "water") {
            price += 0.7;
        }
        else if (product == "beer") {
            price += 1.15;
        }
        else if (product == "sweets") {
            price += 1.3;
        }
        else if (product == "peanuts") {
            price += 1.5;
        }
    }
    else if (city == "Varna") {
        if (product == "coffee") {
            price += 0.45;
        }
        else if (product == "water") {
            price += 0.7;
        }
        else if (product == "beer") {
            price += 1.1;
        }
        else if (product == "sweets") {
            price += 1.35;
        }
        else if (product == "peanuts") {
            price += 1.55;
        }
    }
    let result = price * quantity;
    console.log(result)
}


function check(input) {
    let number = Number(input[0]);
    if (number != 0 && number >= -100 && number <= 100) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}


function ticket(input) {
    let day = input[0];
    if (day == "Monday" || day == "Tuesday" || day == "Friday") {
        console.log(12);
    }
    else if (day == "Wednesday" || day == "Thursday") {
        console.log(14);
    }
    else {
        console.log(16);
    }
}


function validity(input) {
    let number = Number(input[0]);
    let isValid = (number >= 100) && (number <= 200) || (number == 0);
    if (!isValid) {
        console.log("invalid");
    }
}


function animals(input) {
    let type = input[0];
    switch (type) {
        case "dog":
            console.log("mammal"); break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile"); break;
        default:
            console.log("unknown"); break;
    }
}


function workingHours(input) {
    let time = Number(input[0]);
    let day = input[1];
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (time >= 10 && time < 18) {
                console.log("open");
            }
            else {
                console.log("closed");
            } break;
        default:
            console.log("closed"); break;
    }
}


function fruitStore(input) {
    let name = input[0];
    let day = input[1];
    let quantity = input[2];
    let cost = 0;
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (name == "banana") {
                cost += 2.5 * quantity;
            }
            else if (name == "apple") {
                cost += 1.2 * quantity;
            }
            else if (name == "orange") {
                cost += 0.85 * quantity;
            }
            else if (name == "grapefruit") {
                cost += 1.45 * quantity;
            }
            else if (name == "kiwi") {
                cost += 2.7 * quantity;
            }
            else if (name == "pineapple") {
                cost += 5.5 * quantity;
            }
            else if (name == "grapes") {
                cost += 3.85 * quantity;
            }
            else {
                console.log("error"); break;
            };
            console.log(cost.toFixed(2));
            break;
        case "Saturday":
        case "Sunday":
            if (name == "banana") {
                cost += 2.7 * quantity;
            }
            else if (name == "apple") {
                cost += 1.25 * quantity;
            }
            else if (name == "orange") {
                cost += 0.9 * quantity;
            }
            else if (name == "grapefruit") {
                cost += 1.6 * quantity;
            }
            else if (name == "kiwi") {
                cost += 3 * quantity;
            }
            else if (name == "pineapple") {
                cost += 5.6 * quantity;
            }
            else if (name == "grapes") {
                cost += 4.2 * quantity;
            }
            else {
                console.log("error"); break;
            };
            console.log(cost.toFixed(2));
            break;
        default:
            console.log("error"); break;
    }
}


function commissions(input) {
    let t = input[0];
    let s = Number(input[1]);
    switch (t) {
        case "Sofia":
            if (s >= 0 && s <= 500) {
                console.log((s / 100 * 5).toFixed(2));
            }
            else if (s > 500 && s <= 1000) {
                console.log((s / 100 * 7).toFixed(2));
            }
            else if (s > 1000 && s <= 10000) {
                console.log((s / 100 * 8).toFixed(2));
            }
            else if (s > 1000) {
                console.log((s / 100 * 12).toFixed(2));
            }
            else {
                console.log("error");
            }; break;
        case "Varna":
            if (s >= 0 && s <= 500) {
                console.log((s / 100 * 4.5).toFixed(2));
            }
            else if (s > 500 && s <= 1000) {
                console.log((s / 100 * 7.5).toFixed(2));
            }
            else if (s > 1000 && s <= 10000) {
                console.log((s / 100 * 10).toFixed(2));
            }
            else if (s > 1000) {
                console.log((s / 100 * 13).toFixed(2));
            }
            else {
                console.log("error");
            }; break;
        case "Plovdiv":
            if (s >= 0 && s <= 500) {
                console.log((s / 100 * 5.5).toFixed(2));
            }
            else if (s > 500 && s <= 1000) {
                console.log((s / 100 * 8).toFixed(2));
            }
            else if (s > 1000 && s <= 10000) {
                console.log((s / 100 * 12).toFixed(2));
            }
            else if (s > 1000) {
                console.log((s / 100 * 14.5).toFixed(2));
            }
            else {
                console.log("error");
            }; break;
        default:
            console.log("error"); break;
    }
}


function ski(input) {
    let days = Number(input[0]);
    let room = input[1];
    let rating = input[2];
    let cost = 0;
    let finalCost = 0;
    let stay = days - 1;
    if (room == "room for one person") {
        cost = stay * 18;
    }
    else if (room == "apartment") {
        if (stay < 10) {
            cost = stay * 25 * 0.7;
        }
        else if (stay >= 10 && stay <= 15) {
            cost = stay * 25 * 0.65;
        }
        else if (stay > 15) {
            cost = stay * 25 * 0.5;
        }
    }
    else if (room == "president apartment") {
        if (stay < 10) {
            cost = stay * 35 * 0.9;
        }
        else if (stay >= 10 && stay <= 15) {
            cost = stay * 35 * 0.85;
        }
        else if (stay > 15) {
            cost = stay * 35 * 0.8;
        }
    }
    if (rating == "positive") {
        finalCost = cost * 1.25;
    }
    else if (rating == "negative") {
        finalCost = cost * 0.9;
    }
    console.log(finalCost.toFixed(2));
}