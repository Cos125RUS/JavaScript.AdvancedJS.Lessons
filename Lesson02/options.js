'use strict'

const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        street: '123 Main St'
    },
    contacts: {
        email: 'john@example.com',
        phone: '+1234567890'
    }
};

const email = user?.contacts?.email;
console.log(email); // Выводит 'john@example.com'
const defaultValue = user?.otherValue ?? 'Default Value';
console.log(defaultValue); // Выводит 'Default Value'
// Опциональная цепочка вызовов методов и оператор нулевого слияния вместе
const streetName = user?.address?.street ?? 'Unknown';
console.log(streetName);
