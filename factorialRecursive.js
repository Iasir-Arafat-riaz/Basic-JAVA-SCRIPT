// let fact =1
// for(i=10;i>=1;i--){
//     fact = fact*i;
//     console.log(fact)
// }

// let fact=1;
// let i=10
// while(i>=1){
//     fact=fact*i;
//     i--
//     console.log(fact);
// }

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }

}
let result = factorial(5);
console.log(result);