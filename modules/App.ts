import { EmailValidator } from "./EmailValidator";
import { aplhanumeric } from './Type';


/**
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-modules/
 */
let email:string = 'deva@timedoor.net';
let validator = new EmailValidator();
let result = validator.isValid(email);

let test: aplhanumeric = 100;

console.log(test);

console.log(result);