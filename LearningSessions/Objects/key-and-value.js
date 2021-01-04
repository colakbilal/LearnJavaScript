

let target1 = {x: 1};
let source1 = {y: 2, z:3};
for (let key of Object.keys(source1)) {
    target1[key] = source1[key];
    // as below
    // target1["y"] = source1["y"] === target1.y = source1.y;
    // target1["z"] = source1["z"] === target1.z = source1.z;
}
console.log(target1.valueOf());
console.log(target1);
console.log(Object.keys(source1));


```jsx
**Example - 1** 
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
/// Output
// ["a", "b", "c"]

**Example-2**
var obj = {z:1, c:2, d: 8};
console.log(Object.keys(obj)[0]);
//Output
// z

**Example-3**
var obj = {z:1, c:2, d: 8};
console.log(Object.keys(obj).sort());
// Output
// ['c', 'd', 'z']

**Example-4**
var obj = {z:1, c:2, d:8};
console.log(obj['z']);
//Output 
//1

**Example - 5** 
var obj = {z:1, c:2, d:8};
console.log(obj.z);
//Output 
//1

**Important Example**
// Create a function that takes an object and returns the keys and 
//valuesas seperate arrays.
//Return the keys sorted alphabetically and their corresponding
// values in the same order.

function keysAndValues(obj) {
        valueArray.push(obj[keyArray[i]]);
    }
    return [keyArray, valueArray];
}
var obj = {z:1, c:2, d:8};
console.log(obj['z']);

console.log(keysAndValues(obj));

```