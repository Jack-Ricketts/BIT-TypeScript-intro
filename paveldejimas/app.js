"use strict";
class Gyvunas {
    constructor(_vardas, _amzius) {
        this._vardas = _vardas;
        this._amzius = _amzius;
    }
    printInfo() {
        console.log("Gyvuno vardu: " + this._vardas);
        console.log("Jo amzius yra: " + this._amzius);
        console.log("------------------------------");
    }
    isveskGyvunoAmziu() {
        console.log("Amzius: " + this._amzius);
    }
}
class Suo extends Gyvunas {
    constructor(vardas, amzius, _veisle) {
        super(vardas, amzius);
        this._veisle = _veisle;
    }
    printInfo() {
        super.printInfo();
        console.log("Gyvuno tipas: šuo");
        console.log("Veislė: " + this._veisle);
    }
    loti() {
        console.log("Au Au");
    }
}
class Katinas extends Gyvunas {
    printInfo() {
        super.printInfo();
        console.log("Gyvuno tipas: katinas");
    }
}
class Taksas extends Suo {
    constructor(vardasikas, amzius, veisle, _ilgis, decibelai) {
        super(vardasikas, amzius, veisle);
        this._ilgis = _ilgis;
        this.decibelai = decibelai;
    }
    get vardas() {
        return this._vardas;
    }
    garsas() {
        console.log("Au Au");
    }
}
class DulkiuSiurblys {
    constructor(_gamintojas, decibelai) {
        this._gamintojas = _gamintojas;
        this.decibelai = decibelai;
    }
    garsas() {
        console.log("buuuuuu");
    }
}
let sugrokDuKartus = (grojikas) => {
    grojikas.garsas();
    grojikas.garsas();
};
let g1 = new Suo("Brisius", 20, "Kolis");
let g2 = new Katinas("Murklys", 12);
let g3 = new Suo("Rudis", 10, "Taksas");
let g4 = new Taksas("Ilgis", 9, "Taksas", 120, 55);
g4.garsas();
sugrokDuKartus(g4);
g4.isveskGyvunoAmziu();
//g1.printInfo();
//g2.printInfo(); 
let prieglauda = [];
prieglauda.push(g1);
prieglauda.push(g2);
prieglauda.push(g3);
prieglauda.forEach((g) => {
    g.printInfo();
    console.log("");
});
