//types

let x:number=10;
let vyras:boolean=false;
let vardas:string="Jonaitis";
let kazkas:any=55;

let savaitesTemperaturos:number[]=[1,5,3,4];
let darbuotojuSarasas:string[]=['Jonaitis', 'Petraitis'];

enum Spalva{Juoda, Balta, Geltona};
let dazai:Spalva=Spalva.Geltona;

function suma(x:number, y:number):number {
    return x+y;
}
let rezultatas = suma(1, 2);

console.log(rezultatas);

//---------
let faktorialas = (n:number): number => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result
}

console.log("Skaičiaus 5 faktorialas:" + faktorialas(5));
console.log("Skaičiaus 3 faktorialas:" + faktorialas(3));

//Task 1

let bdd = (a: number, b:number):number => {
    let dalinasiIs:number;
    for (let i = 1; i <= Math.max(a, b); i++) {
        if(a%i==0 && b%i==0){
            dalinasiIs = i;
        }
    }
    return dalinasiIs;
}
console.log(bdd(3, 5));
