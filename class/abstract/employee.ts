
/**
 * Abstract Class.
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-abstract-classes/
 */
abstract class Employee {
    constructor(private firstName: string, private lastName:string) {

    }

    abstract getSalary(): number

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    compesationStatement(): string {
        return `${this.fullName} ${this.getSalary()} a month`;
    }
}

/**
 * Child Class.
 */
class FullTimeEmployee extends Employee {
    constructor(
        firstName: string, 
        lastName: string, 
        private salary: number,
        private hours: number
    ) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.salary * this.hours;
    }
}

let john = new FullTimeEmployee('John', 'Doe', 2120000, 280120);

console.log(john.compesationStatement());