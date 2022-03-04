/**
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/
 * 
 * @param items 
 * @returns 
 */
function getRandomElemet<B>(items: B[]): B {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];  
}

let numbers = [1, 5, 7, 9, 1, 3];

let value = getRandomElemet<number>(numbers);

console.log(typeof value);

function f() {
    return { x:10, y: 3};
}

type P = ReturnType<typeof f>;

let book: P = {
    x: 100,
    y: 200
}

console.log(book);

function merge<X, Y>(obj1: X, obj2: Y ) {
    return {
        ...obj1,
        ...obj2
    }
}

let combine = merge<object, object>({ name: 'Deva'}, { job: 'Buruh'});

console.log(typeof combine);