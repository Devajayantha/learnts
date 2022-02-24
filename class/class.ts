/**
 * Javascript style
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-class/
 */
function Person(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

let person = new Person('1111', 'Deva', 'Putra');
console.log(person.getFullName());

/**
 * implement ES6 syntax & type annotations.
 */
class ProductTwo {
    ssn: number;
    firstName: string;
    lastName: string;

    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let persontwo = new ProductTwo(100, 'Hai', 'World');
console.log(persontwo.getFullName());