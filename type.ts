/**
 * Function arguments & return types
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-type-annotations/
 */
let test : string[];

test = ['deva', 'putra'];

let greeting : (name: string) => string;

greeting = function (name: string) {
    return `Hi ${name}`;
};

console.log(test);

console.log(greeting('deva'));