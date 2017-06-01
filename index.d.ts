export declare class Navigable<T> {
    private container;
    private pathTo;
    constructor(container?: T, pathTo?: (string | number)[]);
    item<U>(index: number): Navigable<U>;
    to<K extends keyof T>(path: K): Navigable<T[K]>;
    getPath(): (string | number)[];
    private getPathToChild(pathSegment);
}
