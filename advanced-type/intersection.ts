/**
 * Intersection type advanced
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/
 */
interface Contact {
    email: string;
    phone: string;
}

interface Identity {
    id: number;
    name: string;
}

type Employee = Contact & Identity;

let c: Employee = {
    id: 1,
    name: "deva",
    email: "deva@timedoor.net",
    phone: "081339697563"
};

console.log(c);