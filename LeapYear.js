
console.log(14 / 2);
const year = 1702;
let result = year % 4;
if (result == 0) {
    console.log("this is a leap year");
}

else {
    console.log("this is not a leap year");

}
//function eo convert kora jay bar bar korar jonno

function isLeapYear(year) {

    const result = year % 4;
    if (result == 0) {
        return true;
    }

    else {
       return false;

    }

}
const check=isLeapYear(2020);
console.log(check);