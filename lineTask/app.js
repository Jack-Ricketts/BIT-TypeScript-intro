"use strict";
class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(x) {
        this._x = x;
    }
    set y(y) {
        this._y = y;
    }
    distanceFromOrigin() {
        return Math.sqrt(this._x ** 2 + this._y ** 2);
    }
    translate(x, y) {
        this._x += x;
        this._y += y;
    }
    toString() {
        return '[' + this._x + ';' + this._y + ']';
    }
    distance(p) {
        return Math.sqrt((p.x - this._x) ** 2 + (p.y - this._y) ** 2);
        // 8.12 this.x yra p1
    }
}
const p1 = new Point(9, 5);
const p2 = new Point(0, 8);
const t1 = new Point(0, 8);
t1.translate(0, 5);
p1.toString();
console.log(p1.distanceFromOrigin());
p2.toString();
console.log(p2.distanceFromOrigin());
t1.toString();
console.log(t1.distanceFromOrigin());
console.log(p1.distance(p2));
class Line {
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
    toString() {
        return this._p1.toString() + '-' + this._p2.toString();
    }
    length() {
        return this._p1.distance(p2);
    }
}
let taskas1 = new Point(1, 1);
let taskas2 = new Point(9, 1);
let taskai = new Line(taskas1, taskas2);
console.log(taskai.toString());
console.log(taskai.length());
