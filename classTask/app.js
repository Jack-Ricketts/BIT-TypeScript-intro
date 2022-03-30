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
        console.log('[' + this._x + ';' + this._y + ']');
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
