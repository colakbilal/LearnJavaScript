
//inheritence

let o = {};
o.x = 1;// {x : 1}

let p = Object.create(o)
p.y = 2; // {y : 2}
// p ---> __proto__: o

/*  p : {
       y : 2,
       __proto__ : { // o
           x:1,
          __proto__: { // Object.prototype
               toString: function () {[native object]}
         }
 }
*/

let q = Object.create(p);
q.z = 3; // {z : 3}
//q ---> __proto__ = p,   p.__proto__ = o,  o.__proto__ = Object.prototype
/* q : {
     z: 3,
     __proto__: { // p
          y : 2,
       __proto__ : { // o
           x:1,
          __proto__: { // Object.prototype
               toString: function () {[native object]}
         }

     }

 */

console.log('qp', q.__proto__.valueOf()); // {y : 2}
console.log('qp', q.__proto__.__proto__.valueOf()); // {x : 1}
console.log(q.valueOf()); // {z : 3}
console.log("q", q);
console.log("p", p);
console.log("0", o);

// NOTE - 1: Yazdirmaya calistigimizda sadece OWN PROPORTY leri yazar,  yani {z : 3}

// NOTE - 2: Inherit ettigimiz zaman olusan yeni obje farkli bir referance tutuyor bu cok onemli.

let f = q.valueOf();
console.log(f);

console.log(q.x + q.y + q.z );


// NOTE -3

let obj = {};
obj.x = 1;
console.log(obj);
// { x: 1 }


let yeni = Object.create(obj);
yeni.x = 100;
console.log(yeni);
//{ x: 100 }
/*
    yeni: {
        x:100,
        __proto__:{
            x:1,
            __proto__:{ // obj
                toString: function () {[native object]}
          }
      }
*/



