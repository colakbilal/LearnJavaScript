

/* ********  WORKED ************

const  team = {
    name : "TAE"
};

console.log('init:', team);

team.name = "Automation";

console.log('update name:', team)



OUTPUT

init: { name: 'TAE' }
update name: { name: 'Automation' }

*/





/*   ******** NOT WORKED ************

const  team = {
    name : "TAE"
};

console.log('init:', team);

team.name = "Automation";

console.log('update name:', team);

team = {}

console.log('object update', team);


OUTPUT
team = {}
    ^

    TypeError: Assignment to constant variable.
*/
