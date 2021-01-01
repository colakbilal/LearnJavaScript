
/* *******************
a = 123;
console.log(a);
const a;

OUTPUT:
const a;
^

SyntaxError: Missing initializer in const declaration
*/


/* **********************
a=123;
console.log(a);
let a;

OUTPUT
a=123;
^

ReferenceError: Cannot access 'a' before initialization
*/


/* ******************
const greeting = "hello";
if (1 > 2) {
    greeting = "bye"
}


replace with let



/*  Why b is not defined?? ***********************
if (2>1) {
    let b = "123"
}
console.log(b);

OUTPUT
console.log(b);
^

ReferenceError: b is not defined
*/

/* /Why a is not defined?? **********************

function foo() {
    "use strict";
    a = 1;
}

foo();
*/


