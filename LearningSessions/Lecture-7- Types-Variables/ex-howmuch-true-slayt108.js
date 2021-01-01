
function countTrue(arr) {
    var count = 0;
    for (let i=0; i<arr.length; i++) {

        if (arr[i]) {
            count +=1;
        }
    }
    return count
}

var arryy = countTrue([true,false,true, ,]);

console.log(arryy);