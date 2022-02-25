/**
 * Implement getters and setters.
 * Generate to javascript available ES5 or higher.
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/
 */
class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    public get age(): number
    {
        return this._age;
    }

    public set age(age: number) {
        if (age < 0 || age >= 200) {
            throw new Error("The age is invalid");            
        }

        this._age = age;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(name: string) {
        if (!name) {
            throw new Error("invalid first name.");
        }
        this._firstName = name;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(name: string) {
        if (!name) {
            throw new Error("invalid first name.");
        }
        this._lastName = name;
    }

    public fullName(): string {
        return  `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person();
console.log(person);
person.age = 10;
person.firstName = "Deva";
person.lastName = "Putra";
console.log(person);
console.log(person.fullName());