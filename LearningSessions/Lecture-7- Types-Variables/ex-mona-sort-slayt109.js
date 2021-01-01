// First method
function mona(arr) {
    var swap = 0;
    var unsorted = true;
    while (unsorted) {
        unsorted = false;
        for (let i=0; i<(arr.length-1); i++) {
            if (arr[i] > arr[i+1]) {
                unsorted = true;
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swap +=1
            }
        }
    }
    return swap;
}

console.log(mona([3,9,7,4]));



// Second Mehod
const numberOfSwaps = (function () {
    const swapArrayElements = function (arr, indexA, indexB) {
        const temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
        return arr;
    };
    return function countSwap(a) {
        let swap = 0;
        let sorting = true;
        while (sorting) {
            sorting = false;
            for (let i = 0; i < a.length - 1; ++i) {
                if (a[i] > a[i + 1]) {
                    sorting = true;
                    a = swapArrayElements(a, i, i + 1);
                    swap++;
                }
            }
        }
        return swap;
    }
})();
console.log(numberOfSwaps([5,4,3]));
console.log(numberOfSwaps([1,3,4,5]));
console.log(numberOfSwaps([5,4,3,2]));