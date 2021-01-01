
function foo() {
    return 42
}
foo.bar = 'Hello World'

a= [1,3,4,'derin']

console.log(typeof foo); // function
console.log(typeof foo());  // number
console.log(typeof foo.bar); // string
console.log(typeof a);   // object

//********************************//
function var1() {
    var age = 100;
    if (age > 12){
        var  dogYears = age * 7;      // burda var yerine let yazsaydik ulasamazdik.
    }
    console.log(`You are ${dogYears} dog years old!`);
}

var1();

var a = var1();
var b = var1;

console.log(typeof a)  // undefined donuyor return olmadigi icin
console.log(typeof b);  // function

//****************************//
var foot = function bar () {
    return 42
}

console.log(typeof bar); ////???????????????????

console.log(typeof foot());












