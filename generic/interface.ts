/**
 * Generic interfaces describe object
 * 
 * @template U 
 * @template K 
 */
interface Pair<U, K> {
    key: U,
    value: K
}

let month: Pair<string, number> = {
    key: 'Deva',
    value: 10
};

console.log(month);

/**
 * Generic interfaces describe methods
 */
interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

class List<T> implements Collection<T> {
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }

    remove(o: T): void {
        let index = this.items.indexOf(o);

        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    show(): T[] {
        return this.items;
    }
}

let list = new List<number>();

list.add(10);

console.log(list.show());

/**
 * generic interfaces describe index type.
 */
interface Options<T> {
    [name: string]: T
}

let inputOptions: Options<boolean> = {
    'disabled': false,
    'visible': true
};
