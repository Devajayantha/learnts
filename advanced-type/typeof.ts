type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error("Invalid arguments");    
}

console.log(add(100, 200));

/**
 * Instanceof Example
 */
class Customer {
    isCreditAllowed(): boolean {
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        return true;
    }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner:BusinessPartner): string {
    let message: string;

    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }
    
    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Credit issue';
    }

    return message;
}

/**
 * Example used `in` operator
 * 
 * @param partner 
 * @returns 
 */
function signContractAsCustomer(partner: BusinessPartner): string {
    if ('isCreditAllowed' in partner) {
        return partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    return partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
}


console.log(signContract(new Customer()));

console.log(signContractAsCustomer(new Supplier()));


/**
 * Implement User defined type guards.
 * 
 * @param partner 
 * @returns 
 */
function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer;
}

function signIsContract(partner: BusinessPartner): string {
    let message: string;
    if (isCustomer(partner)) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }

    return message;
}

console.log(signIsContract(new Customer()));