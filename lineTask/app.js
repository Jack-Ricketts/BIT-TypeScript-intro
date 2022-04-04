"use strict";
class Point {
    constructor(_p1, _p2) {
        this._p1 = _p1;
        this._p2 = _p2;
    }
    get p1() {
        return this._p1;
    }
    get p2() {
        return this._p2;
    }
    set p1(p1) {
        this._p1 = p1;
    }
    set p2(p2) {
        this._p2 = p2;
    }
    toString(p) {
        return '[' + this._p1 + ';' + this._p2 + ']' + '[' + p.p1 + ';' + p.p2 + ']';
    }
    distance(p) {
        return Math.sqrt((p.p1 - this._p1) ** 2 + (p.p2 - this._p2) ** 2);
    }
}
const coord1 = new Point(1, 1);
const coord2 = new Point(9, 1);
console.log('Taskai yra: ' + coord1.toString(coord2));
console.log(coord1.distance(coord2));
