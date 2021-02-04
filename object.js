var student = {id:01, phone:1254, name:"asad"};
var student2 = { id:14, phone:98789, name:"salam"};
// var phone = student2.phone;
// console.log(student,student2,phone);
var phone =student["phone"];
console.log(phone);
student.phone = 456745;
console.log(student);