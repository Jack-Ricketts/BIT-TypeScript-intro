"use strict";
class Darbuotojas {
    constructor(_vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
    }
    get vardas() {
        return this._vardas;
    }
    get pavarde() {
        return this._pavarde;
    }
    get atlyginimas() {
        return this._atlyginimas;
    }
    gpm() {
        return this._atlyginimas * 0.2;
    }
    psd() {
        return this._atlyginimas * 0.0698;
    }
    vsd() {
        return this._atlyginimas * 0.1252;
    }
}
const btnPrideti = document.getElementById("prideti");
const btnIstrinti = document.getElementById("istrinti");
const inpVardas = document.getElementById("pavadinimas");
const inpPavarde = document.getElementById("kaina");
const inpAlga = document.getElementById("kiekis");
const output = document.getElementById("output");
const gpmSuma = document.getElementById("gpmSuma");
const psdSuma = document.getElementById("psdSuma");
const vsdSuma = document.getElementById("vsdSuma");
let darbuotojai = [];
let jsonString = localStorage.getItem("darbuotojai");
if (jsonString != null) {
    let data = JSON.parse(jsonString);
    data.forEach((obj) => {
        let empl = new Darbuotojas(obj._vardas, obj._pavarde, obj._atlyginimas);
        darbuotojai.push(empl);
    });
}
let outputDarbuotojai = () => {
    if (output != null && gpmSuma != null && psdSuma != null && vsdSuma != null) {
        output.innerHTML = "";
        let sumaGPM = 0;
        let sumaPSD = 0;
        let sumaVSD = 0;
        darbuotojai.forEach((darbininkas, indeksas) => {
            sumaGPM += darbininkas.atlyginimas * 0.2;
            sumaPSD += darbininkas.atlyginimas * 0.0698;
            sumaVSD += darbininkas.atlyginimas * 0.1252;
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = 'Vardas: ' + darbininkas.vardas + ", Pavarde: " + darbininkas.pavarde + ", Atlyginimas: " + darbininkas.atlyginimas;
            const btn = document.createElement("button");
            btn.textContent = "Atleisti";
            btn.className = "btn btn-danger float-end";
            btn.onclick = () => {
                deleteDarbuotojas(indeksas);
            };
            li.appendChild(btn);
            output.appendChild(li);
        });
        let roundedGPM = sumaGPM.toFixed(2);
        let roundedPSD = sumaPSD.toFixed(2);
        let roundedVSD = sumaVSD.toFixed(2);
        gpmSuma.textContent = Number(roundedGPM) + " EUR";
        psdSuma.textContent = Number(roundedPSD) + " EUR";
        vsdSuma.textContent = Number(roundedVSD) + " EUR";
    }
};
let deleteDarbuotojas = (indeksas) => {
    darbuotojai.splice(indeksas, 1);
    outputDarbuotojai();
    localStorage.setItem("darbuotojai", JSON.stringify(darbuotojai));
};
if (btnPrideti != null) {
    btnPrideti.onclick = () => {
        darbuotojai.push(new Darbuotojas(inpVardas.value, inpPavarde.value, inpAlga.valueAsNumber));
        outputDarbuotojai();
        localStorage.setItem("darbuotojai", JSON.stringify(darbuotojai));
    };
}
if (btnIstrinti != null) {
    btnIstrinti.onclick = () => {
        localStorage.removeItem("darbuotojai");
        darbuotojai = [];
        outputDarbuotojai();
    };
}
outputDarbuotojai();
