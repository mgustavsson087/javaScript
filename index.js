// förr använde man 'var' för variable efter JS 6 så används 'let'
// let name = 'Mikael';
// console.log(name);

// Constant kan inte ändras på samma sätt som en variabel. Man kan inte reassigna en constant
const intrestRate = 0.3; 
// intrestRate = 1;

            // Vi har två olika type i JS. Primitives/Value types och Reference types

    // Primitives: String, number, Boolean, undefined, null
    let name = 'Mikael' // String literal 
    let age = 30 // Number literal
    let isApproved = false // boolian literal
    // Reference: Objects, array, functions

// JS är Dynaically typed. Java är statically-typed. 
// typen av varialbler i JS kan ändras byter du värdet på let name = 'Mikael' till let name = 30 så blir den en number.

                // Object = samling av variabler
    // Detta 
// let name = 'Mikael'
// let age = 30 

    // kan också skrivas såhär
let person = {
    name: 'Mikael',
    age: 30
};
// Editera variabler i ett object
    person.name = 'Klas'
    person['name'] = 'Mary'

console.log(person);

            // Arrays
    let selectedItems = ['nail', 'hammer', 'coin' ];
    selectedItems[4] = 'phone' 
    console.log(selectedItems);
    //console.log(selectedItems[0]);

            // Functions
    
    function greet( number) {
        return number * number;
    }
    let number = greet(2);
    console.log(number);
