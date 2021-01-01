
function hiding(text) {
    var newString = "" ;
    for (let i=0; i < text.length; i++) {
         if (text[i].toLowerCase() === text[i]) {
             newString += text[i]
         }
    }
    if (newString === "") {
        console.log("There is no lowercase letter")
    }
    return newString;

}

console.log(hiding("AliraGa"));
console.log(hiding("AASSSG"));