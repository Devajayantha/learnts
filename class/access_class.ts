/**
 * continues lesson from class typescript.
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/
 */
class Product {
    /**
     * Short code in params we can input access modifier and type anotations
     * 
     * @param ssn 
     * @param firstName 
     * @param lastName 
     */
    constructor(
        protected ssn: number, 
        protected firstName: string, 
        protected lastName: string
    ) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * If you don’t specify any access modifier for properties and methods, 
     * they will take the public modifier by default.
     * 
     * @returns 
     */
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Product(100, 'Hai', 'World');
console.log(person.getFullName());