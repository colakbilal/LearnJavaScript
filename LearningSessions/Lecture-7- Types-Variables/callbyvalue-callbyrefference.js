function a(b){
    b = 3
    console.log(b);
}
var b =4;
a(b);
console.log(b);
console.log(a(b));



var person = {
    name:'Zeynep'
}
function changeName(person){
    person.name = "Bilal";
}
changeName(person);
console.log(person.name);