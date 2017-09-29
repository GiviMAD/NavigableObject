export class Navigable<T>{
    constructor(private pathTo: (string | number)[] = []) {
    }
    to<T extends Array<K>,K>(this:Navigable<Array<K>>,index: number): Navigable<K>;
    to<K extends keyof T>(path: K): Navigable<T[K]>;
    to(path: string | number) {
        return new Navigable([...this.pathTo, path]);
    }
    getPath() {
        return this.pathTo;
    }
}
interface Test {
    a: string,
    b: Test[],
}