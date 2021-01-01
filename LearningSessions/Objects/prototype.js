
// ALMOST every object has a second object associated with it. The second object is known as prototype.
// First object inherits properties from prototypes
// Object literals prototype is  Object.prototype

let obj = {
    prop1: 1
}

console.log('obj.valueOf()', obj.valueOf());
console.log('obj.valueOf().toString()', obj.valueOf.toString());
console.log('obj.__proto__.valuOf.toString()', obj.__proto__.valueOf.toString());


Object.prototype.x = 5;
console.log(obj.x);
//5

let yepyeni = {
    t: 900
}

console.log(yepyeni.x);
//5

Object.prototype.topla = function (a,b) {
      return (a + b);
}

console.log(yepyeni.topla(3,5));




