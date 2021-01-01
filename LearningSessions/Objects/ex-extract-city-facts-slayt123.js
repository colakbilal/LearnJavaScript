


//Create a function that takes an abject as an argumant and returns a string with facts about the city.
//The city facts will need to be extracted from object's three properties name - population - continent

function cityFacts(ooo) {
    if (typeof ooo === 'object' && ooo!== null){
        return (`${ooo.name}  has a population of  ${ooo.population} is situated in ${ooo.continent}`)
    } else{
        return "Please give an object"
    }

}

var ooo = {
    name: "Paris",
    population: "1234",
    continent: "Europe"
}


console.log(cityFacts(a));
