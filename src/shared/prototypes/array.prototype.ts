
Array.prototype['allTruthy'] = function <T>(): boolean {
    return this.every((item: T) => Boolean(item));
};

Array.prototype['allFalsy'] = function <T>(): boolean {
    return this.every((item: T) => !item);
};

Array.prototype['anyTruthy'] = function <T>(): boolean {
    return this.some((item: T) => Boolean(item));
};

Array.prototype['anyFalsy'] = function <T>(): boolean {
    return this.some((item: T) => !item);
};

Array.prototype['find'] = function <T>(predicate: (item: T, index?: number, arr?: Array<T>) => boolean): T {
    if (this.length === 0 || !predicate) {
        return undefined;
    }
    for (let i: number = 0; i < this.length; i++) {
        if (predicate(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

Array.prototype['findIndex'] = function <T>(predicate: (item: T, index?: number, arr?: Array<T>) => boolean): number {
    if (this.length === 0 || !predicate) {
        return undefined;
    }
    for (let i: number = 0; i < this.length; i++) {
        if (predicate(this[i])) {
            return i;
        }
    }
    return undefined;
};

Array.prototype['joinTruthy'] = function<T>(separator?: string): string {
    return this.filter((item: T) => Boolean(item)).join(separator || ' ');
};

Array.prototype['remove'] = function <T>(item: T): boolean {
    const index: number = this.indexOf(item);
    if (index < 0) {
        return false;
    }
    this.splice(index, 1);
    return true;
};

Array.prototype['removeIf'] = function<T>(predicate: (item: T, index?: number, arr?: Array<T>) => boolean): T[] {
    const result: T[] = [];
    for (let i: number = this.length - 1; i >= 0; i--) {
        if (predicate(this[i], i, this)) {
            result.push(this[i]);
            this.splice(i, 1);
        }
    }
    return result;
};

interface Array<T> {
    allTruthy<T>(): boolean;
    allFalsy<T>(): boolean;
    anyTruthy<T>(): boolean;
    anyFalsy<T>(): boolean;
    find<T>(predicate: (item: T, index?: number, arr?: Array<T>) => boolean): T;
    findIndex<T>(predicate: (item: T) => boolean): number;
    joinTruthy<T>(separator?: string): string;
    remove<T>(item: T): boolean;
    removeIf<T>(predicate: (item: T, index?: number, arr?: Array<T>) => boolean): T[];
}
