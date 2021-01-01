/*
var top = 10;
var inner = 50;

function foo() {
    var inner = 20;
    console.log(inner);
}

foo();
console.log(inner);*/


// Global
//top
//inner
//foo()

//Execution
  //top=10
  //inner=50
   // foo() creation
         //inner
   //foo() execution
        //inner = 20
//20

/*function myFun() {
    var a = 10;
    var b = 10;
    console.log(a+b);

}
myFun();*/



/*
var name = 'kasim';
function printgreet(name) {
    console.log("hello " + name);
}

printgreet("arthur")
*/



/*(function myFuns() {
    var a = 10;
    var b = 10;
    console.log(a+b);
})();*/

/*var a = 10;
var b = 10;
b = a ; LHS and RHS*/



/*var foo;
console.log(foo);*/


/*function myFun() {
    var a = 10;
    var b = 10;
    console.log(a+b);
}
console.log(myFun());*/


/*
ali = 10;


console.log(i);*/


var a = 10;

function myFn() {
    var b = a;
    console.log(b);
    console.log(c);
}

myFn();
// Creation
//  Global Scope  - a  - myFn()
//  myFn Scope b
//Execution
//a=10
//b=10