let obj = {
    y:2,
    x:1
}

console.log(obj);
//{ y: 2, x: 1 }

obj.z = 3;
console.log(obj);
//{ y: 2, x: 1, z: 3 }

delete obj.x;
console.log(obj);
//{ y: 2, z: 3 }

let refObj = obj;
console.log(refObj);
//{ y: 2, z: 3 }

refObj.x = 1;
console.log(refObj);
//{ y: 2, z: 3, x: 1 }

console.log(obj);
//{ y: 2, z: 3, x: 1 }

console.log(refObj === obj);
//true