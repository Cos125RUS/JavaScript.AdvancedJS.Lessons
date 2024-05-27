'use strict'

function* numberGen() {
    let num = 1;
    while(true) {
        yield num++;
    }
}

const gen = numberGen();

for (let index = 0; index < 10; index++) {
    console.log(gen.next().value);
}