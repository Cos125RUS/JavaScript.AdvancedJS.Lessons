'use strict'

const range = {
    from: 1,
    to: 10
};
range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            return this.current <= this.last ? {done: false, value: this.current++} : { done: true };
        }
    }
};

for (const number of range) {
    console.log(number);
}

console.log('--------------------------------------------');

const pseudo = {
    0: 'first',
    1: 'second',
    length: 2
};

const array = Array.from(pseudo);
console.log(array);
console.log(array.pop());

console.log('--------------------------------------------');

const text = 'Some text';
const textArray = Array.from(text);
console.log(textArray);