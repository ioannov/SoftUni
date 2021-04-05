function usdToBGN(input) {
    let usd = Number(input[0]);
    console.log(usd * 1.79549);
}


function radToDeg(input) {
    let rad = Number(input[0]);
    console.log((rad * 180 / Math.PI).toFixed(0));
}


function deposit(input) {
    let deposited = Number(input[0]);
    let time = Number(input[1]);
    let percent = Number(input[2]);
    let result = deposited + time * ((deposited * percent / 100) / 12);
    console.log(result);
}


function books(input) {
    let pagesCurrent = Number(input[0]);
    let pagesTime = Number(input[1]);
    let daysLeft = Number(input[2]);
    let result = pagesCurrent / pagesTime / daysLeft;
    console.log(result);
}


function birthday(input) {
    let rent = Number(input[0]);
    let cake = rent * 0.2;
    let drinks = cake * 0.55;
    let animator = rent / 3;
    let result = rent + cake + drinks + animator;
    console.log(result);
}


function charity(input) {
    let days = Number(input[0]);
    let chefs = Number(input[1]);
    let cakes = Number(input[2]);
    let waffles = Number(input[3]);
    let pancakes = Number(input[4]);
    let result = ((cakes * 45 + waffles * 5.8 + pancakes * 3.2) * chefs * days) * 7 / 8;
    console.log(result)
}


function fruitMarket(input) {
    let strawberryPrice = Number(input[0]);
    let bananaKilos = Number(input[1]);
    let orangeKilos = Number(input[2]);
    let raspberryKilos = Number(input[3]);
    let strawberryKilos = Number(input[4]);
    let raspberryPrice = strawberryPrice / 2;
    let orangePrice = raspberryPrice * 0.6;
    let bananaPrice = raspberryPrice * 0.2;
    let result = strawberryKilos * strawberryPrice + bananaKilos * bananaPrice + orangeKilos * orangePrice + raspberryKilos * raspberryPrice;
    console.log(result);
}


function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let volume = length * width * height;
    let sand = volume * percent / 100;
    let water = (volume - sand) / 1000;
    console.log(water);
}