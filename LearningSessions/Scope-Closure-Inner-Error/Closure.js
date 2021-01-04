
//////make Adder bizim objemiz  plus2 bir instance
function makeAdder(x) {

    function add(y) {
        return y+x;

    }

    /*function minus(z) {
        return x-z;

    }*/

   return add;

}


var plus2 = makeAdder(2);

console.log(plus2(5));