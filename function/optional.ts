function add(a: number, b?: number): number
{
    if (b == null) {
        return a;
    }

    return a + b;
}

const create = (a:number, b: number = 1): number => {
    return a * b;
}

console.log(add(12), create(20));