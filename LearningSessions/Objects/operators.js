

// -------------  conditional operator - the only ternary operation ------------
function absolute(value) {
    let result = value > 0 ? value : - value;
    console.log(`absolute of ${value} = ${result}`);

}

absolute(-5);



// ----------------- delete ---------

let obj = {a:1 , b:2};
console.log(obj);
let resultdel = delete obj.a;
console.log(obj);
console.log('result' , resultdel);



