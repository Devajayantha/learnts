/**
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-constraints/
 * 
 * @param obj1 
 * @param obj2 
 * @returns 
 */
function merge<U extends object, J extends object>(obj1: U, obj2: J) {
    return {
        ...obj1,
        ...obj2
    };
}

console.log(merge({'name' : 'Deva'}, {'age' : 'Putra'}));