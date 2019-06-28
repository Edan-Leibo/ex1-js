
function dividedByThree(num) {
    return (num % 3 === 0);
}

function dividedByFive(num) {
    return (num % 5 === 0);
}

function fizzBuzz() {
    let ans = "";
    for (let i = 1; i <= 100; i++) {
        if (dividedByFive(i) && dividedByThree(i)) {
            ans += "FizzBuzz ";
        }
        else if (dividedByThree(i)) {
            ans += "Fizz ";
        } else if (dividedByFive(i)) {
            ans += "Buzz ";
        }
        else {
            ans += i + " ";
        }
    }
    console.log(ans);
}

fizzBuzz();

