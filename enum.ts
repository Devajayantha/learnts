
/**
 * Implement enum 
 * 
 * @see https://www.typescripttutorial.net/typescript-tutorial/typescript-enum/
 */
enum Product {
    Apple,
    Mango,
    Banana,
    Avocado
};

const isItSummer = (product : Product) =>  {
    let itSummer: boolean;

    switch(product) {
        case Product.Apple:
        case Product.Mango:
        case Product.Banana:
            itSummer = true;
            break;
        default:
            itSummer = false;
            break;
    }

    return itSummer;
}

console.log("example 1 : " , isItSummer(10));

/** Real case */

enum Status {
    contract_finished,
    in_period,
    canceled
}

interface Job {
    id: number;
    status: Status;
    description: string;
}

const find: Job =  {
    id: 1,
    status: Status.in_period,
    description: "Developer"
}

console.log("Example 2 : ");

if (find.status == Status.in_period) {
    console.log("approved");
} else {
    console.log("decline");
}