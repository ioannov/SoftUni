function pyramid(input) {
    let n = Number(input[0]);
    let current = 1;
    let print = "";
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= r; c++) {
            if (current > n) {
                break;
            }
            print += current + " ";
            current++;
        }
        console.log(print);
        print = "";
        if (current > n) {
            break;
        }
    }
}


function equal(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let odds = 0;
    let even = 0;
    let result = "";
    for (let i = n1; i <= n2; i++) {
        let o1 = Number(i.toString().charAt(0));
        let e1 = Number(i.toString().charAt(1));
        let o2 = Number(i.toString().charAt(2));
        let e2 = Number(i.toString().charAt(3));
        let o3 = Number(i.toString().charAt(4));
        let e3 = Number(i.toString().charAt(5));
        odds = o1 + o2 + o3;
        even = e1 + e2 + e3;
        if (odds == even) {
            result += `${i} `
        }
        odds = 0;
        even = 0;
    }
    console.log(result);
}


function train(input) {
    let judges = Number(input[0]);
    let topic = input[1];
    let currentGrades = 0;
    let totalGrades = 0;
    let totalTopics = 0;
    for (let i = 2; i < input.length; i++) {
        while (!isNaN(input[i])) {
            currentGrades += Number(input[i]);
            totalGrades += Number(input[i]);
            totalTopics += 1;
            i++;
        }
        console.log(`${topic} - ${(currentGrades / judges).toFixed(2)}.`);
        currentGrades = 0;
        if (input[i] == "Finish" || input[i] == input.length) {
            break;
        }
        else {
            topic = input[i];
        }
    }
    console.log(`Student's final assessment is ${(totalGrades / totalTopics).toFixed(2)}.`);
}


function sums(input) {
    let pr = 0;
    let np = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "stop") {
            break;
        }
        let a = Number(input[i]);
        if (a < 0) {
            console.log(`Number is negative.`);
            continue;
        }
        for (let j = a - 1; j > 0; j--) {
            if (j === 1) {
                pr += a; break;
            }
            let check = a / j;
            if (check !== Math.floor(check)) {
                continue;
            }
            else {
                np += a; break;
            }
        }
    }
    console.log(`Sum of all prime numbers is: ${pr}`);
    console.log(`Sum of all non prime numbers is: ${np}`);
}


function special(input) {
    let n = Number(input[0]);
    let numbers = "";
    for (let i = 1111; i <= 9999; i++) {
        let all = 0;
        for (let j = 0; j <= i.toString().length; j++) {
            if (n % Number(i.toString().charAt(j)) == 0) {
                all++;
            }
        }
        if (all == 4) {
            numbers += `${i} `;
        }
    }
    console.log(numbers);
}