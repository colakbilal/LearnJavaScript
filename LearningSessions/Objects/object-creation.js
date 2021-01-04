

// A --------- Object Literal --------

    let obj = {};
let obj1 = {
    x:2,
    y:5
}


//  B --------- var objA = new funName() ---------

    1-
var emp1 = {};
emp1.firstName = "Micheal";
emp1.lastName = "Scott";
emp1.gender = "M";
emp1.designation = "REgional MAnager";



2 - Object olusturan fonksiyonu asagidaki tanimlayabiliriz.
    Ama bu istenen yontem degildir.
    function createNewObject(firstName, lastName, gender, designation ) {
    var newObject = {};
    newObject.firstName = firstName;
    newObject.lastName = lastName;
    newObject.gender = gender;
    newObject.designation = designation;
    return newObject
}

var ooo = createNewObject("Bilal", "Colak", "M", "Tester");
console.log(ooo);


//////////  ONEMLI  Object creation /////////////
3- Eger biz yeni bir object yaratacaksak bunu asagidaki gibi yaratbiliriz.

    var ooo = new createNewObject("Bilal", "Colak", "M", "Tester");

//Bu new sayesinde createNewObject fonksiyonu su sekilde davranir. yani olsacak
//ooo objectinin elemanlarina ulasilabilir bu thisler ooo ya aittir.
// createNewObject fonksiyonuna da constructur denir.

function createNewObject(firstName, lastName, gender, designation ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.designation = designation;

}


//  C -------------------Object.create() -----------------

    let obj = Object.create({x:1, y:7, z:4});
console.log(obj);
// {x:1, y:7, z:4}