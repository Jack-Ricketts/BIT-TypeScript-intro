interface Zmogus{
    vardas:string,
    amzius:number,
    telefonas?:string
}

let apsilankymas = (lankytojas:Zmogus)=>{
    console.log('Pas mus apsilanke ' + lankytojas.vardas + ', kurio amzius ' + lankytojas.amzius);
}

let paliko = (lankytojas:Zmogus)=>{
    console.log(lankytojas.vardas + ' isejo, kurio amzius ' + lankytojas.amzius);
}

let lankytojas:Zmogus={
    vardas:'Jonas',
    amzius:32
};

apsilankymas(lankytojas);
paliko(lankytojas);

//Task 2

interface Point{
    x:number,
    y:number
}

let xyFunkcija:Point={
    x:2,
    y:2
};

let taskas = (p:Point)=>{
    console.log(Math.sqrt((p.x * p.x + p.y * p.y)));
}

taskas(xyFunkcija);