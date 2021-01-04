
// -------------------- break -------------
//NOTE: Asagidaki gibi for gongusunu kirar yani sadece if i degil.

const dunya = [1,2,3,4,7,5];
let i = 0;
for (j = dunya.length; i<j; i++) {
    if(dunya[i] > 5) {
        break;
    }
}

console.log('i after break:', i); //i after break: 4  (7 ye gelince break etti)


//---- continue -----
// NOTE: break in tam tersidir dunya[i]> 5 ise devam et.


const dunya1 = [1,2,3,4,7,5];
let l = 0;
for (k = dunya1.length; l<k; l++) {
    if(dunya1[l] > 5) {
        continue;
    }
}
console.log('i after continue:', i);


//--- try catch ------

function throwMe() {
    throw new Error('me');
}

try {
    console.log('try');
    throwMe();
    console.log('end of try');
} catch (ex) {
    console.log(ex.message)
}

