function sayHelp (){
    console.log("jai ho");
    console.log("want to go khilgao");
}
sayHelp();
var fog = 12;
console.log(fog);
var haha = 34;
console.log("haha");
sayHelp();
function itzXoss (){
    console.log("aha ki shundhor");
    console.log("sei moja chilo cha");

}
itzXoss();
function taka (double)
{
    var result = double*2;
    console.log(result);

}
taka(10);
taka(50);
 function add(number1, number2){
var total = (number1*number2);
return total

 }
 var result1 = add(6,7);
 console.log(result1);
 console.log("not add this time");
var result2 = add(9,8);
console.log("ki ekta ovostha");
console.log(result2);


function large (number){
var larger= number[0]; 
    for(var i = 0; i<number.length; i++){
    var element =number[i];
    if (element> larger){
        larger=element;

    }
    }
return larger;
}
var number = [14,25,56,14,45,56,33,77,79];
var output = large(number);
console.log(output);
