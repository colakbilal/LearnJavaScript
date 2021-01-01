
function cristmasDate(date) {
    //let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    if ( day === 24 && month === 11) {
        return true
    } else {
        return false
    }
}

console.log(cristmasDate(new Date(2222, 11, 4)));