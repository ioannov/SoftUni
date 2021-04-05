function seven() {
    for (let i = 0; i < 1000; i++) {
        if (i % 10 == 7) {
            console.log(i);
        }
    }
}


function table(input) {
    let n = Number(input[0]);
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${n} = ${i * n}`);
    }
}


function leap(input) {
    let y1 = Number(input[0]);
    let y2 = Number(input[1]);
    for (let i = y1; i <= y2; i++) {
        if (i % 4 == 0) {
            console.log(i);
        }
    }
}


function factorial(input) {
    let n = Number(input[0]);
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f = f * i;
    }
    console.log(f);
}


function words(text) {
    let t = text[0];
    let count = 1;
    for (let i = 0; i < t.length; i++) {
        if (t.charAt(i) == " ") {
            count += 1;
        }
    }
    if (count > 10) {
        console.log(`The message is too long to be send! Has ${count} words.`);
    }
    else {
        console.log(`The message was send successfully!`);
    }
}


function histogram(input) {
    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i <= input.length; i++) {
        let n = Number(input[i]);
        if (n < 200) {
            p1++;
        }
        else if (n >= 200 && n <= 399) {
            p2++;
        }
        else if (n >= 400 && n <= 599) {
            p3++;
        }
        else if (n >= 600 && n <= 799) {
            p4++;
        }
        else if (n >= 800) {
            p5++;
        }
    }
    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
    console.log(`${(p4 / n * 100).toFixed(2)}%`);
    console.log(`${(p5 / n * 100).toFixed(2)}%`);
}


function remain(input) {
    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    for (let i = 1; i <= input.length; i++) {
        let a = Number(input[i]);
        if (a % 2 == 0) {
            p1++;
        }
        if (a % 3 == 0) {
            p2++;
        }
        if (a % 4 == 0) {
            p3++;
        }
    }
    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
}


function salary(input) {
    let n = Number(input[0]);
    let s = Number(input[1]);
    for (let i = 2; i < input.length; i++) {
        let a = input[i];
        if (a == "Facebook") {
            s -= 150;
        }
        else if (a == "Instagram") {
            s -= 100;
        }
        else if (a == "Reddit") {
            s -= 50;
        }
    }
    if (s <= 0) {
        console.log(`You have lost your salary.`);
    }
    else {
        console.log(s);
    }
}


function minNum(input) {
    let n = Number(input[0]);
    let a = Number(input[1]);
    for (let i = 2; i <= n; i++) {
        if (a > Number(input[i])) {
            a = Number(input[i]);
        }
    }
    console.log(a);
}