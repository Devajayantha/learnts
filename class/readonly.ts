/**
 * Implement readonly class properties in declaration or in the contructor.
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-readonly/
 */
class Person {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

class Product {
    constructor(readonly name: string) {
        this.name = name;
    }
}