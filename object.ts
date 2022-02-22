/**
 * TypeScript object Type
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-object-type/
 */
let employee: {
    firstName: string;
    age: number;
    job: string;
};

employee = {
    firstName: 'deva',
    age: 20,
    job: 'buruh',
};

console.log(employee);

let job: {} = {};

job = {
    first: 'Deva'
};

console.log(job);