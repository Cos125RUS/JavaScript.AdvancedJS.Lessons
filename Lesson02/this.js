// 'use strict'

// function regularFunc() {
//     console.log(this);
// }

// const arrayFunc = () => {
//     console.log(this);
// }

// regularFunc();
// arrayFunc();


const obj = {
    regularMethod: function() {
        console.log(this);
    },
    arrayMethod: () => {
        console.log(this);
    }
};

obj.regularMethod();
obj.arrayMethod();