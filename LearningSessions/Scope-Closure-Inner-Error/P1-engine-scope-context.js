
function foo(a){
    var b = a;
    return a + b;
}

var c = foo(2);

// LHS 3 RHS 4
// Engine: Scope'a elinde LHS için c var mı diye sorar-------LHS
// Scope: compiler az önce yarattı der
// Engine: RHS reference için foo'yu sorar--------------------RHS
// Scope: compiler az önce yarattı der
// Engine: Tamam foo'yu çalıştırıyorum.
// Engine: LHS reference için a var mı?-----------------------LHS
// Scope: Evet compiler az önce yarattı al.
// Engine: Tamam o zaman ona 2 ata.
// Engine: LHS reference için b var mı?-----------------------LHS
// Scope: Evet compiler az önce yarattı al.
// Engine: Tamam o zaman ona atamak için RHS refence ile a getir. --RHS
// Engine: Elinde a ve b var mı?
// Scope: var
// Engine: O zaman RHS referans ile a ve b'yi getir------------- RHS
// Scope: Al bakalım.
// Engine: a ve b'yi topla
// Engine: RHS referansı ile a+b'yi dön--------------------------RHS




/*
SCOPE
Scope has to do with the the visibility of variables.
    In JavaScript, scope is achieved through the use of functions.
    When you use the keyword “var” inside of a function, the variable that you are initializing is private to the function,
and cannot be seen outside of that function.

Scope, değişkenlerin görünürlüğüyle ilgilidir.
JavaScript'te scope, functionlarin kullanılmasıyla elde edilir.
Bir funct nin içinde "var" anahtar sözcüğünü kullandığınızda, başlattığınız değişken functna özeldir
 ve bu funct nin dışında görülemez.

*/


/*
CONTEXT
Context is related to objects. It refers to the object to which a function belongs. When you use the JavaScript “this” keyword, it refers to the object to which function belongs.

Scope refers to the visibility of variables, and content refers to the object to which a function belongs.
For example, inside of a function, when you say: “this.accoutNumber”, you are referring to the property “accoutNumber”, that belongs to the object to which that function belongs

Context, nesnelerle ilgilidir. Bir fonksiyonun ait olduğu nesneyi ifade eder. JavaScript "this" anahtar sözcüğünü kullandığınızda, fonksiyonun ait olduğu nesneyi ifade eder.

Scope, değişkenlerin görünürlüğünü, context ise bir fonksiyonun ait olduğu nesneyi ifade eder. Scope, değişkenlerin görünürlüğü  ve Context, bunun aynı kapsamdaki değerini ifade eder.
Örneğin, bir fonksiyonun içinde, "this.accoutNumber" dediğinizde, o fonksiyonun ait olduğu nesneye ait olan "accoutNumber" özelliğine atıfta bulunuyorsunuz


function foo() {
    console.log(this.bar);
}

var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo
};

var obj2 = {
    bar: "obj2"
};

obj1.foo(); // obj1
obj12.foo(); //obj2
foo.call( obj2 );  // obj2

*/
