class Point{
    constructor (
        private _x:number,
        private _y:number
    ){
        
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    set x(x:number){
        this._x=x;
    }

    set y(y:number){
        this._y=y;
    }

    public distanceFromOrigin():number{
        return Math.sqrt(this._x**2+this._y**2);
    }

    public translate(x:number, y:number){
        this._x+=x;
        this._y+=y;
    }

    public toString(){
        return '['+this._x+';'+this._y+']';
    }

    public distance(p:Point){
        return Math.sqrt((p.x - this._x)**2 + (p.y - this._y)**2);
        // 8.12 this.x yra p1
    }
    
}

const p1=new Point(9,5);
const p2=new Point(0,8);

const t1=new Point(0,8);
t1.translate(0,5);

p1.toString();
console.log(p1.distanceFromOrigin());

p2.toString();
console.log(p2.distanceFromOrigin());

t1.toString();
console.log(t1.distanceFromOrigin());

console.log(p1.distance(p2));



class Line{
    constructor (
        private _p1:Point,
        private _p2:Point
    ){
        
    }

    get p1(){
        return this._p1;
    }

    get p2(){
        return this._p2;
    }

    set p1(p1:Point){
        this._p1=p1;
    }

    set p2(p2:Point){
        this._p2=p2;
    }

    public toString(){
        return this._p1.toString() + '-' + this._p2.toString();
    }

    public length(){
        return this._p1.distance(p2);
    }
}

let taskas1=new Point(1,1);
let taskas2=new Point(9,1);

let taskai=new Line(taskas1, taskas2);

console.log(taskai.toString());
console.log(taskai.length());