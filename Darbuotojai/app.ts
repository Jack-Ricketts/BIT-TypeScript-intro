class Darbuotojas {
    constructor(
        private _vardas:string,
        private _pavarde:string,
        private _atlyginimas:number
    ) {

    }
    get vardas(){
        return this._vardas;
    }

    get pavarde(){
        return this._pavarde;
    }

    get atlyginimas(){
        return this._atlyginimas;
    }

    public gpm(){
        return this._atlyginimas*0.2;
    }

    public psd(){
        return this._atlyginimas*0.0698;
    }

    public vsd(){
        return this._atlyginimas*0.1252;
    }

}

const btnPrideti=document.getElementById("prideti");

const inpVardas=<HTMLInputElement>document.getElementById("pavadinimas");
const inpPavarde=<HTMLInputElement>document.getElementById("kaina");
const inpAlga=<HTMLInputElement>document.getElementById("kiekis");
const output=document.getElementById("output");

let darbuotojai:Darbuotojas[]=[];


darbuotojai.push(new Darbuotojas('Jonas', 'Jonaitis', 1000));
darbuotojai.push(new Darbuotojas('Tomas', 'Tomaitis', 900));
darbuotojai.push(new Darbuotojas('Zbygnievas', 'Zbygnievaitis', 399));
console.log(darbuotojai);

let outputDarbuotojai=()=>{
    if (output!=null){
        output.innerHTML="";
        
        darbuotojai.forEach((darbininkas)=>{
            const li=document.createElement("li");
            li.className="list-group-item";
            li.textContent='Vardas: ' + darbininkas.vardas + ", Pavarde: " + darbininkas.pavarde + ", Atlyginimas: "+ darbininkas.atlyginimas;
            output.appendChild(li);
        });
    }  
};

if (btnPrideti!=null){
    btnPrideti.onclick=()=>{
        darbuotojai.push(new Darbuotojas(inpVardas.value,inpPavarde.value,inpAlga.valueAsNumber));
        outputDarbuotojai();
    };
}

outputDarbuotojai();