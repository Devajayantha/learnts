function getNetPrice(price: number, discount: number, format: boolean) {
    let netPrice = price * (1 - discount);

    return format ?  `$${netPrice}` : netPrice;
}

/**
 * Example cast assertion.
 */
// let netPrice = getNetPrice(100, 0.05, false) as number;

/**
 * Alternative cast assertion.
 */
let netPrice = <number>getNetPrice(100, 0.05, false);

console.log(netPrice);
