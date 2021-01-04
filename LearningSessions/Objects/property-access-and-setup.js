
//-------- Property Access Errors and  Define Property-----------
// ----------Define --------
let o = {};
o.a = 'a';
Object.defineProperty(o, p:'a', attributes :{
    value: 'a',
    writible: true,
    enumerable: true,
    configurable: true,
    extensible: true
});
console.log(o);


//----- Access Error because ,  writible: false,
let o = {};

Object.defineProperty(o, p:'a', attributes :{
        value: 'a',
        writible: false,
        enumerable: true,
        configurable: true,
        extensible: true
});

let io = Object.create(o);
io.a = "aaaa"
console.log(io);
// TypeError: Cannot assign to read only property 'a' of object



// let book = {};
// console.log(book.subtitle);
// // undefined
//
// console.log(book.subtitle.length);
// //TypeError: Cannot read property 'length' of undefined
//
// console.log(note);
//ReferenceError: note is not defined