function race(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);
    let totalSeconds = first + second + third;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }
    else (console.log(`${minutes}:${seconds}`));
}


function bonusPoints(input) {
    let initial = Number(input[0]);
    let bonus = 0;
    if (initial <= 100) {
        bonus += 5;
    }
    else if (initial > 1000) {
        bonus = initial * 0.1;
    }
    else (bonus = initial * 0.2);
    if (initial % 2 == 0) {
        bonus += 1;
    }
    else if (initial % 5 == 0) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(initial + bonus);
}


function speed(input) {
    let s = Number(input[0])
    if (s <= 10) {
        console.log("slow");
    }
    else if (s > 10 && s <= 50) {
        console.log("average");
    }
    else if (s > 50 && s <= 150) {
        console.log("fast");
    }
    else if (s > 150 && s <= 1000) {
        console.log("ultra fast");
    }
    else (console.log("extremely fast"));
}


function metric(input) {
    let value = Number(input[0]);
    let inputUnit = input[1];
    let outputUnit = input[2];
    let result = 0;
    if (inputUnit == "mm") {
        if (outputUnit == "cm") {
            result = value / 10;
        }
        else (result = value / 1000);
    }
    else if (inputUnit == "cm") {
        if (outputUnit == "mm") {
            result = value * 10;
        }
        else (result = value / 100);
    }
    else {
        if (outputUnit == "mm") {
            result = value * 1000;
        }
        else (result = value * 100);
    }
    console.log(result.toFixed(3));
}


function fifteen(input) {
    let hoursInitial = Number(input[0]);
    let minutesInitial = Number(input[1]);
    let minutesFinal = minutesInitial + 15;
    let hoursFinal = hoursInitial + Math.floor(minutesFinal / 60);
    if (minutesFinal > 59) {
        minutesFinal -= 60;
    }
    if (hoursFinal > 23) {
        hoursFinal -= 24;
    }
    if (minutesFinal < 10) {
        console.log(`${hoursFinal}:0${minutesFinal}`);
    }
    else (console.log(`${hoursFinal}:${minutesFinal}`));
}


function godzillaVkong(input) {
    let budget = Number(input[0]);
    let actors = Number(input[1]);
    let clothesCost = Number(input[2]);
    let decoration = budget * 0.1;
    let clothesCostFinal = 0;
    if (actors > 150) {
        clothesCostFinal = actors * clothesCost * 0.9;
    }
    else (clothesCostFinal = actors * clothesCost);
    let totalCost = decoration + clothesCostFinal;
    if (totalCost <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
    }
    else {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`)
    }
}


function record(input) {
    let recordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);
    let secondsInitial = distanceMeters * secondsPerMeter;
    let delay = Math.floor(distanceMeters / 15) * 12.5;
    let result = (secondsInitial + delay).toFixed(2);
    if (result < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${result} seconds.`);
    }
    else (console.log(`No, he failed! He was ${(result - recordSeconds).toFixed(2)} seconds slower.`));
}


function scholarship(input) {
    let income = Number(input[0]);
    let grade = Number(input[1]);
    let minimumWage = Number(input[2]);
    let scholarschipResult = Math.floor(grade * 25);
    let scholarshipWage = Math.floor(minimumWage * 0.35);
    if (grade < 4.5) {
        console.log(`You cannot get a scholarship!`);
    }
    else if (grade >= 4.5 && grade < 5.5 && income <= minimumWage) {
        console.log(`You get a Social scholarship ${scholarshipWage} BGN`);
    }
    else if (grade >= 5.5) {
        if (income >= minimumWage) {
            console.log(`You get a scholarship for excellent results ${scholarschipResult} BGN`);
        }
        else if (income < minimumWage && scholarschipResult >= scholarshipWage) {
            console.log(`You get a scholarship for excellent results ${scholarschipResult} BGN`);
        }
        else { console.log(`You get a Social scholarship ${scholarshipWage} BGN`); }
    }
    else { console.log(`You cannot get a scholarship!`); }
}