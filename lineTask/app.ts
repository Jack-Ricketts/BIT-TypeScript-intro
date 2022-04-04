class Point{
    constructor (
        private _p1:number,
        private _p2:number
    ){
        
    }

    get p1(){
        return this._p1;
    }

    get p2(){
        return this._p2;
    }

    set p1(p1:number){
        this._p1=p1;
    }

    set p2(p2:number){
        this._p2=p2;
    }

    public toString(p:Point){
        return '['+this._p1+';'+this._p2+']' + '['+p.p1+';'+p.p2+']';
    }

    public distance(p:Point){
        return Math.sqrt((p.p1 - this._p1)**2 + (p.p2 - this._p2)**2);
    }
    
}

const coord1=new Point(1,1);
const coord2=new Point(9,1);

console.log('Taskai yra: ' + coord1.toString(coord2));
console.log(coord1.distance(coord2));