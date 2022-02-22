/**
 * Implement dynamic type.
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/why-typescript/
 */
interface Product {
    id: number,
    name: string,
    price: number
};

function getProduct(id) : Product {
    return {
        id : id,
        name : `Awesome Gadget ${id}`,
        price : 99.5
    }
}

const product = getProduct(1);

const showProduct = (name: string, price: number) => {
    console.log(`The Product ${name} costs $${price}`);
}

showProduct(product.name, product.price);