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
        return Math.sqrt(this._x*this._x+this._y*this._y);
    }

    public translate(x:number, y:number){
        this._x+=x;
        this._y+=y;
    }

    public toString(){
        console.log('['+this._x+';'+this._y+']');
    }

    public distance(p:Point){
        return Math.sqrt((p.x - this._x)*(p.x - this._x) + (p.y - this._y)*(p.y - this._y));
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



