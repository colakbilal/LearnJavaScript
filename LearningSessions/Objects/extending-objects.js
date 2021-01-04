

////--------- Method-1  target1 e source1 i eklemek.     ---------------
let target1 = {x: 1};
let source1 = {y: 2, z:3};
for (let key of Object.keys(source1)) {
    target1[key] = source1[key];

}
console.log(target1.valueOf());


////--------- Method-2 ---------------
let target = {x: 1};
let source = {y: 2, z:3};
Object.assign(target, source);
console.log(target.valueOf());

