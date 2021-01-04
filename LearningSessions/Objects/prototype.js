
// ALMOST every object has a second object associated with it. The second object is known as prototype.
// First object inherits properties from prototypes
// Object literals prototype is  Object.prototype

let obj = {
    prop1: 1
}

console.log('obj.valueOf()', obj.valueOf());
console.log('obj.valueOf().toString()', obj.valueOf.toString());
console.log('obj.__proto__.valuOf.toString()', obj.__proto__.valueOf.toString());



// NOTE: Hepsinin atasi Object.prototype ve onda yapilan degisiklik objemize de
// yansir cunku tum objeler Object.prototype i referans alir. Yani ondan inherit
// oldugu icin onun ozelliklerini tasir. Asagidaki screenshoti goz onune getir.

//Example - 1
Object.prototype.x = 5;
console.log(obj.x);
//5

let yepyeni = {
    t: 900
}

console.log(yepyeni.x);
//5



//Example - 2
// object prototype a bir topla methodu ekledik ve Object.prototype dan
//inherit olan tum objelerde bu methoda ulasabilir ve kullanabiliriz.

Object.prototype.topla = function (a,b) {
      return (a + b);
}

console.log(yepyeni.topla(3,5));
//8



