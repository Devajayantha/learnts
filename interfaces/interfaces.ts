/**
 * Implement interface
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-interface/
 */
interface Person {
    firstName: string,
    middleName?: string,
    lastName: string
}

interface StringFormat {
    (str: string, isUpper: boolean): string
}

function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let john: Person = {
    firstName: 'John',
    lastName: 'Doe'
};

let format: StringFormat = function (str: string, isUpper: boolean): string {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('HI', false));

console.log(getFullName(john));