
// Once kendisinde arar kendisinde yoksa linkinde arar.
var foo = {
    a:42
};

//create 'bar' and link it to 'foo'
var bar = Object.create(foo);

bar.b = "hello World"

console.log(bar.b); // b bar da oldugu icin hello world doner
console.log(bar.a); // a yi once bar da arar yani kendisinde yoksa linkinde arar linkinde var yani foo da o zaman 42 doner.



