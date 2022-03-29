const output=document.getElementById("atsakymasin");
const btSkaiciuotiCm=document.getElementById("skaiciuoticm");
let inCm = <HTMLInputElement> document.getElementById("var_cm");

interface Centimeters{
    x:number
}

const vertimas=(p:Centimeters)=>{
    return p.x * 0.393701;
}

let atsakymas:Centimeters={
    x:1
}
const fSuskaiciuotiCm=()=>{ 
    atsakymas.x=+inCm.value;
    if (output!=null){
        output.innerHTML=vertimas(atsakymas) + " in";
    }
}

if (btSkaiciuotiCm!=null){
    btSkaiciuotiCm.onclick=fSuskaiciuotiCm;
}


