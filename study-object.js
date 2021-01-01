var emp1 = {};
emp1.firstName = "Micheal";
emp1.lastName = "Scott";
emp1.gender = "M";
emp1.designation = "REgional MAnager";


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



