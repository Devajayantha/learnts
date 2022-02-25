export class Person {
    constructor(
        private firstName: string, 
        private lastName: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getfullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    describe(): string {
        return `This is ${this.firstName} ${this.lastName}`;
    }
}