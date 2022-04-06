class Darbuotojas {
    constructor(
        protected _vardas:string,
        protected _pavarde:string,
        protected _atlyginimas:number
    ) {

    }
    public get vardas(){
        return this._vardas;
    }

    public set vardas(vardas:string){
        this._vardas=vardas;
    }

    public get pavarde(){
        return this._pavarde;
    }

    public set pavarde(pavarde:string){
        this._pavarde=pavarde;
    }

    public get atlyginimas(){
        return this._atlyginimas;
    }

    public set atlyginimas(atlyginimas:number){
        this._atlyginimas=atlyginimas;
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
const btnIstrinti=document.getElementById("istrinti");

const inpVardas=<HTMLInputElement>document.getElementById("pavadinimas");
const inpPavarde=<HTMLInputElement>document.getElementById("kaina");
const inpAlga=<HTMLInputElement>document.getElementById("kiekis");
const output=document.getElementById("output");
const gpmSuma=document.getElementById("gpmSuma");
const psdSuma=document.getElementById("psdSuma");
const vsdSuma=document.getElementById("vsdSuma");

let darbuotojai:Darbuotojas[]=[];

let jsonString=localStorage.getItem("darbuotojai");
if (jsonString!=null){
    let data=JSON.parse(jsonString);

    interface dataDarbuotojai{
        _vardas: string; 
        _pavarde: string; 
        _atlyginimas: number; 
    }
    
    data.forEach((obj:dataDarbuotojai) => {
        let empl=new Darbuotojas(obj._vardas, obj._pavarde, obj._atlyginimas);
        darbuotojai.push(empl);
    });
}

let outputDarbuotojai=()=>{
    if (output!=null && gpmSuma!=null && psdSuma!=null && vsdSuma!=null){
        output.innerHTML="";
        let sumaGPM=0;
        let sumaPSD=0;
        let sumaVSD=0;
        
        darbuotojai.forEach((darbininkas, indeksas)=>{
            sumaGPM+=darbininkas.atlyginimas*0.2;
            sumaPSD+=darbininkas.atlyginimas*0.0698;
            sumaVSD+=darbininkas.atlyginimas*0.1252;

            const li=document.createElement("li");
            li.className="list-group-item";
            li.textContent='Vardas: ' + darbininkas.vardas + ", Pavarde: " + darbininkas.pavarde + ", Atlyginimas: "+ darbininkas.atlyginimas;
            
            const btn=document.createElement("button");
            btn.textContent="Atleisti";
            btn.className="btn btn-danger float-end";
            btn.onclick=()=>{
                deleteDarbuotojas(indeksas);
            };
            li.appendChild(btn);

            output.appendChild(li);
        });
        let roundedGPM = sumaGPM.toFixed(2);
        let roundedPSD = sumaPSD.toFixed(2);
        let roundedVSD = sumaVSD.toFixed(2);
        gpmSuma.textContent=Number(roundedGPM) +" EUR";
        psdSuma.textContent=Number(roundedPSD) +" EUR";
        vsdSuma.textContent=Number(roundedVSD) +" EUR";
    }  
};

let deleteDarbuotojas=(indeksas:number)=>{
    darbuotojai.splice(indeksas,1);
    outputDarbuotojai();
    localStorage.setItem("darbuotojai",JSON.stringify(darbuotojai));
}

if (btnPrideti!=null){
    btnPrideti.onclick=()=>{
        darbuotojai.push(new Darbuotojas(inpVardas.value,inpPavarde.value,inpAlga.valueAsNumber));
        outputDarbuotojai();
        localStorage.setItem("darbuotojai",JSON.stringify(darbuotojai));
    };
}

if (btnIstrinti!=null){
    btnIstrinti.onclick=()=>{
        localStorage.removeItem("darbuotojai");
        darbuotojai=[];
        outputDarbuotojai();
    }
}

outputDarbuotojai();

class PirmaeilisDarbuotojas extends Darbuotojas{
    _npd:number = 0;
    constructor(
        _vardas:string,
        _pavarde:string,
        _atlyginimas:number
    ){
        super(_vardas,_pavarde,_atlyginimas);
        this.perskaiciuotiNPD();
    }

    public override gpm(){
        return (this.atlyginimas - this._npd)*0.2;
    }

    private perskaiciuotiNPD(){
        if(this.atlyginimas <= 730){
            this._npd += this.atlyginimas;
        }
        else if (this.atlyginimas <=1678){
            this._npd  += 460-0.26*(this.atlyginimas-730);
        }
        else {
            this._npd  += 400-0.18*(this.atlyginimas-642);
        }
    }
}

let darbuotojai2:PirmaeilisDarbuotojas[]=[];

const darb1 = new PirmaeilisDarbuotojas('Darbuotojas1', 'Vienas', 460);
const darb2 = new PirmaeilisDarbuotojas('Darbuotojas2', 'Du', 1000);
const darb3 = new PirmaeilisDarbuotojas('Darbuotojas3', 'Trys', 2000);

darbuotojai2.push(darb1, darb2, darb3);

console.log(darbuotojai2);

darbuotojai2.forEach((darbuotojas:PirmaeilisDarbuotojas)=>{
    let gpm=0;
    gpm+=darbuotojas.gpm();
    console.log(darbuotojas.vardas + ' mokes: ' + gpm.toFixed(2) + ' GPM ir turi ' + darbuotojas._npd + ' NPD, nes atlyginimas ' + darbuotojas.atlyginimas);
});

class PraktikantasDarbuotojas extends Darbuotojas {
    constructor(       
        _vardas:string,
        _pavarde:string,
        _atlyginimas:number = 0
    ){
        super(_vardas,_pavarde,_atlyginimas);
    }
    public override get vardas(){
        return this._vardas;
    }

    public override set vardas(vardas:string){
        this._vardas=vardas;
    }

    public override get pavarde(){
        return this._pavarde;
    }

    public override set pavarde(pavarde:string){
        this._pavarde=pavarde;
    }

    public override get atlyginimas(){
        return this._atlyginimas;
    }

    public override set atlyginimas(atlyginimas:number){
        this._atlyginimas=atlyginimas;
    }

    public override gpm(){
        return this._atlyginimas*0;
    }

    public override psd(){
        return this._atlyginimas*0;
    }

    public override vsd(){
        return this._atlyginimas*0;
    }
}

let darbuotojai3:PraktikantasDarbuotojas[]=[];

const prak1 = new PraktikantasDarbuotojas('Praktikantas1', 'Vienas');
const prak2 = new PraktikantasDarbuotojas('Praktikantas2', 'Vienas');

darbuotojai3.push(prak1, prak2);

console.log(darbuotojai3);

darbuotojai3.forEach((darbuotojas:PraktikantasDarbuotojas)=>{
    let gpm=0;
    let psd=0;
    let vsd=0;
    gpm+=darbuotojas.gpm();
    psd+=darbuotojas.psd();
    vsd+=darbuotojas.vsd();
    console.log(darbuotojas.vardas + ' mokes: ' + psd + ' PSD ' + vsd + ' VSD ir ' + gpm + ' GPM, nes uzdirba ' + darbuotojas.atlyginimas);
});