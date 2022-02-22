/**
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-void-type/
 */

/**
 * Return with type number.
 * 
 * @param message 
 * @returns 
 */
const message = (message: number) : number => {
    return message;   
} 

/**
 * Can return with any type at all.
 * 
 * @param message 
 */
const text = (message) : void => {
    console.log(message);
}

text("hello world");