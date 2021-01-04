var a = 10;

function outer() {

    var b = a;
    console.log(b);
    function inner() {
        var b = 20;  //////once ataniyor
        var c = b;
        console.log(c)

    }
    inner();
}

outer();

//10
//20

var a = 10;

function outer() {

    var b = a;
    console.log(b);
    function inner() {
        var c = b;
        console.log(c)
        var b = 20; // sonra ataniyor.
    }
    inner();
}

outer();
//10
//undefined