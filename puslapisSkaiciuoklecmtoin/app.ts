const output=document.getElementById("atsakymasin");
const btSkaiciuotiCm=document.getElementById("skaiciuoticm");
let inCm = <HTMLInputElement> document.getElementById("var_cm");

let cm:number

const vertimas=(cm)=>{
    return cm * 0.393701;
}

const fSuskaiciuotiCm=()=>{ 
    cm=+inCm.value;
    if (output!=null){
        output.innerHTML=vertimas(cm) + " in";
    }
}

if (btSkaiciuotiCm!=null){
    btSkaiciuotiCm.onclick=fSuskaiciuotiCm;
}


