export declare class AsyncArray<T> implements Promise<T[]> {
    private array;
    constructor(array?: Promise<T[]>);
    readonly [Symbol.toStringTag]: string;
    filter(predicate: (item: T, index: number, thisArg?: any) => Promise<boolean>, thisArg?: any): AsyncArray<T>;
    map<R>(mapper: (item: T, index: number, thisArg?: any) => Promise<R>, thisArg?: any): AsyncArray<R>;
    concat(...arrays: (Promise<T[]>)[]): AsyncArray<T>;
    reduce<R>(accumulator: (value: Promise<R>, item: T) => Promise<R>, value: Promise<R>): Promise<R>;
    catch<TResult = never>(onrejected?: ((reason: any) => (PromiseLike<TResult> | TResult)) | undefined | null): Promise<T[] | TResult>;
    finally(onfinally?: (() => void) | undefined | null): Promise<T[]>;
    then<TResult1 = T[], TResult2 = never>(onfulfilled?: ((value: T[]) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2>;
}
