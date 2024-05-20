const dog = Symbol('dog');
console.log(dog.description);

let obj = {
    [Symbol('id')]: 'id'
};

console.log(obj);

let newObj = {};
Object.assign(newObj, obj);
console.log(newObj);

console.log('================================');

let id = Symbol.for('id');
let id2 = Symbol.for('id');
console.log(id === id2);

const myObj = {
    [id]: id,
    // [id2]: id2.description
};

// id = '123';
console.log(myObj);
console.log(myObj[id].description);

console.log('================================');

console.log(Symbol.keyFor(id));