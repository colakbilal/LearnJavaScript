
/*    ****  WORKED - 1*****
function foo() {
    console.log("inside in foo function");
}

foo();
console.log(foo);
var foo = "123";
console.log(foo);


OUTPUT
inside in foo function
[Function: foo]
123
*/


//********************************************************//

/*    ****    NOT WORKED - 1      *****
function foo() {
    console.log("inside in foo function");
}

foo();
console.log(foo);
const foo = "123";
console.log(foo);

OUTPUT
const foo = "123";
^

SyntaxError: Identifier 'foo' has already been declared
*/


//********************************************************//


/*    **** WORKED - 2 *****
var foo = "123";
console.log(foo);

var foo = function foo() {
    console.log("inside in foo function");
}

foo();
console.log(foo);

OUTPUT
123
inside in foo function
[Function: foo]
*/




//********************************************************//

/*    ****    NOT WORKED -2     *****
var  foo = "123";
console.log(foo);

function foo() {
    console.log("inside in foo function");
}

foo();
console.log(foo);

output
123
foo();
^

TypeError: foo is not a function
*/