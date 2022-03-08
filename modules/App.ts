import { EmailValidator } from "./EmailValidator";

/**
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-modules/
 */
let email:string = 'deva@timedoor.net';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(result);