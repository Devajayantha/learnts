
/**
 * Implement rest type.
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-rest-parameters/
 * 
 * @param numbers 
 * @returns 
 */
function total(...numbers: number[]): number {
    let total : number = 0;

    /** 1 */
    // numbers.forEach((count) => total += count);

    /** 2 */
    numbers.forEach(function (count) {
        total += count;
    });

    return total;
}

console.log(total());
console.log(total(10, 20, 30));
console.log(total(30));