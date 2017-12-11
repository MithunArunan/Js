/*
https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75
https://medium.com/craft-academy/javascript-variables-should-you-use-let-var-or-const-394f7645c88f
Decide the datatype based on the scope of the varaibles
let - very restrictive - scope restricted in curly braces
var - scope restricted in functions
const - Cant change the object varaible
#Performace benefits
*/

//var 
for(var i=0; i <10; i++)
{
    //console.log(i)
}
// var scope is present - even after exiting the loop
console.log(i)

//let 
for (let i = 0; i < 5; i++)
{
	console.log(i);
}
//Takes the value of var variable
console.log(i);

//let 
for (let loop = 0; loop < 5; loop++)
{
	console.log(loop);
}
//undefined error - since let variable is not available in this scope
//console.log(loop);

//const - can't be change once initialized
const HI = "You should never regret telling hi to someone"
console.log(HI)

//TypeError: Assignment to constant variable.
//HI = "please delete it"

const JSON = {a: 1, b: "bye!"}
JSON.a = 4
//Const members can be changed
console.log(JSON);