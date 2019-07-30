import * as tslib_1 from "tslib";
export class AsyncArray {
    constructor(array = Promise.resolve([])) {
        this.array = array;
    }
    filter(predicate, thisArg) {
        return new AsyncArray(this.array.then(array => Promise.all(array.map((item, index) => predicate(item, index, thisArg))).then(filter => array.filter((item, index) => filter[index]))));
    }
    map(mapper, thisArg) {
        return new AsyncArray(this.array.then(array => Promise.all(array.map((item, index) => mapper(item, index, thisArg)))));
    }
    concat(...arrays) {
        return new AsyncArray(this.array.then(array => Promise.all(arrays).then(arraysToConcat => array.concat(...arraysToConcat))));
    }
    reduce(accumulator, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            for (const item of yield this.array) {
                value = accumulator(value, item);
            }
            return value;
        });
    }
    catch(onrejected) {
        return this.array.catch.call(this.array, onrejected);
    }
    finally(onfinally) {
        return this.array.finally.call(this.array, onfinally);
    }
    then(onfulfilled, onrejected) {
        return this.array.then.call(this.array, onfulfilled, onrejected);
    }
}
//# sourceMappingURL=async.array.js.map