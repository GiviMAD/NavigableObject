export declare class Navigable<T> {
    private pathTo;
    constructor(pathTo?: (string | number)[]);
    to<T extends Array<K>, K>(this: Navigable<Array<K>>, index: number): Navigable<K>;
    to<K extends keyof T>(path: K): Navigable<T[K]>;
    getPath(): (string | number)[];
}
