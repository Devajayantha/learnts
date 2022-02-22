/**
 *  example function.
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-functions/ 
 */


function add(a: number, b: number): number {
    return a + b;
}

const equal = (a:number, b:number): number => {
    return a * b;
}

const  wait = (a: string): void => {
    console.log(a.toUpperCase());
}

console.log(add(2, 3), equal(4, 6));

wait('hello');