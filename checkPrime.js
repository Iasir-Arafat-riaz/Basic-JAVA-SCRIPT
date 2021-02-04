// let n = 10;
function prime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
           return "not a prime number";
        }
    }
    return "itz a prime number";
}

let result =prime(11);
console.log(result);