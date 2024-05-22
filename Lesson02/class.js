// 'use strict'

class AutoMobile {
    _horsePowers = 0;
    set horsePowers(value) {
        if (value < 0) throw new Error("Отрицательное количество сил");
        this._horsePowers = value;
    }
    get horsePowers() {
        return this._horsePowers;
    }
    constructor(power) {
        this._horsePowers = power;
    }
}

let auto = new AutoMobile(100);
// auto.horsePowers = -10;
auto.horsePowers = 10;
console.log(auto.horsePowers);
auto._horsePowers = 11;
console.log(auto.horsePowers);

class AutoMobile2 {
    #horsePowers = 0;
    set horsePowers(value) {
        if (value < 0) throw new Error("Отричательное количество сил");
        this.#horsePowers = value;
    }
    get horsePowers() {
        return this.#horsePowers;
    }

    constructor(power) {
        this.#horsePowers = power;
    }
}

let auto2 = new AutoMobile2(100);
auto2.horsePowers = 50;
console.log(auto2.horsePowers);
// auto2.#horsePowers = 10;