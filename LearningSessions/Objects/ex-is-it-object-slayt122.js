// Create a function to check whether the given parameter is an Object or not

function isObject (param) {

    if (typeof param === 'object' && param !== null ) {
        return true
    } else {

        return false
    }

}

console.log(isObject(param));
