
/*
const a = 2;
let b = 0;

switch (a) {

    case 1:
        b += "1";
        break;
    case 2:
        b += "2";

    case 3:
        b += 3;
        break;

    default:
        console.log("Olmadi patron");

};

console.log(b);

OUTPUT
023


*/

///??????????????????????????????//////

const person = {
    name: 'Jack',
    age: 25,
    greet() {
        console.log(this);
        console.log(this.age);

        function innerFunct() {
            console.log(this);
            console.log(this.age);
        }

        innerFunct();
    }


}

person.greet();






