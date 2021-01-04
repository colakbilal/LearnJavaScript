//----- Switch case   if gibi dusune bilirsiniz -----
// NOTE: ilk break e kadar calisir yani caselerden sonraki break koymak onemli. koyulmazsa otomatikmen
// bir alttaki breake kadar calistirir.
let n = 1;
switch (n) {
    case 1:
        console.log('one');
        break;

    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
}

// -------------- if --------------
let m = 1;
if (m === 1){
    console.log('one');
}


// ------------ while ----------------
// NOTE: while in ici true oldugu surece calistir.
let count = 0;
while(count < 10){
    console.log('count:', count++);
}


//----------- do - while   en az bir kere mutlaka calisir sonra while a giriyorsa girer---------------
let countX = 0;
do {
    console.log('countX:', countX++);
} while (countX > 2);


// -------- for -------
let a = ['one', 'two', 'three'];
for (let i = 0 ; i < a.length; i++) {
    console.log(`a[${i}]:` , a[i]);
}

//for (let i = 0, j = a.length; i <j ; i++) {
//     console.log(`a[${i}]:` , a[i]);
// }


//-------- for - of  works with iterable objects like array,strings,sets and maps -------------
// Note: Valuelari alir.

let data = [100,3,4,5,6] , sum = 0;
for (let element of data) {
    sum += element;
}
console.log(sum);

// ------- for of  with objects ---------
//NOTE : object ler iterable degildir ve asagidaki gibi kulanirsak
//TypeError: obj1 is not iterable hatasi aliriz
/*let obj1 = {x: 1, y: 2, z: 3};
for (let element of obj1) {
    console.log(element);
}*/

// for of un Object ile dogru kullanimi
let obj = {x: 1, y: 2, z: 3};
for (let element of Object.keys(obj)) { // Object.key(obj) ile keylerinden olusan bir array yapar
    console.log(element);
}

for (let element of Object.values(obj)) { // Object.values (obj) ile valuelarindan olusan bir array yapar
    console.log(element);
}


for (let {element, value} of Object.entries(obj)){
    console.log(`${element}:  ${value}` );
}



//------------- for - in -----------
// Object in keyleri uzerinde gezinmeni saglar.

let ob = {x: 1, y: 2, z: 3};
let obKeys = '';
for (let key in ob){
    obKeys += key + ','
}
console.log('ob keys', obKeys)

//For in ile atasinin keylerini de alabilir.
let p = Object.create(ob);
p.t = 4;
console.log(p); // { t: 4 }

let keyp = '';
for (let key in p) {
    keyp += key + ','
}
console.log('keyp', keyp);
// keyp t,x,y,z,   atasinin elemanlarini da getirdi yani o nun.