var friendsAge = [15,12,14,17];
console.log(friendsAge);
console.log(friendsAge[2]);
var mirajAge = friendsAge [3];
console.log(mirajAge);
friendsAge[1] = 24;
console.log(friendsAge);
var position = friendsAge.indexOf (14);
console.log(position);
friendsAge.push(45,99,15,26);
console.log(friendsAge.length);
friendsAge.pop();
console.log(friendsAge);
friendsAge.unshift("akkach");
console.log(friendsAge);
friendsAge.shift("akkach");
console.log(friendsAge);
var date = new Date();
console.log(date);
var teaLine = ["rohim", "korim", "sogir", "guddu"];
console.log(teaLine);
teaLine.push("salam");
console.log(teaLine);

teaLine.unshift("kuddus");
console.log(teaLine);
teaLine.slice(2);
console.log(teaLine);
var part = teaLine.slice(2)
console.log(part);
var part = teaLine.slice(2,5);
console.log(part);
var devide = teaLine.splice(1);
console.log(devide);
var team = ["abbas", "nannu", "kiron"];
var dev = team.splice(1);
console.log(dev);

var number = [22,11,5,66,88,55,44,54,89,99]
var side= number.slice(2);
console.log(side);


