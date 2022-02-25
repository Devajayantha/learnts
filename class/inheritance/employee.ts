import { Person } from "./person";

/**
 * Implement inheritance class.
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-inheritance/
 */
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string
    ) {
        /**
         * Super call must supply all parameters for base class. 
         * In contructor must apply this method because the constructor is not inherited.
         */
        super(firstName, lastName)
    }

    /**
     * Overriding method from base class.
     * 
     * @returns 
     */
    describe(): string {
        return super.describe() + ` I'm a ${this.jobTitle}`;
    }
}

let employee = new Employee('John','Doe', 'Developer');

console.log(employee.describe());