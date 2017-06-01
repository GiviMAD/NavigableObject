export class Navigable<T>{
    constructor(private container: T = <T>{}, private pathTo: (string | number)[] = []) {
    }
    item<U>(index: number): Navigable<U> {
        return new Navigable({} as U, this.getPathToChild(index));
    }
    to<K extends keyof T>(path: K) {
        return new Navigable(this.container[path], this.getPathToChild(path));
    }
    getPath() {
        return this.pathTo;
    }
    private getPathToChild(pathSegment: string | number) {
        let newPath = [...this.pathTo,pathSegment];
        return newPath;
    }
}