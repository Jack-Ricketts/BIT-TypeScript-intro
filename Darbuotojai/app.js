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
const inpVardas = document.getElementById("pavadinimas");
const inpPavarde = document.getElementById("kaina");
const inpAlga = document.getElementById("kiekis");
const output = document.getElementById("output");
const gpmSuma = document.getElementById("gpmSuma");
const psdSuma = document.getElementById("psdSuma");
const vsdSuma = document.getElementById("vsdSuma");
let darbuotojai = [];
darbuotojai.push(new Darbuotojas('Jonas', 'Jonaitis', 1000));
darbuotojai.push(new Darbuotojas('Tomas', 'Tomaitis', 900));
darbuotojai.push(new Darbuotojas('Zbygnievas', 'Zbygnievaitis', 399));
console.log(darbuotojai);
let outputDarbuotojai = () => {
    if (output != null && gpmSuma != null && psdSuma != null && vsdSuma != null) {
        output.innerHTML = "";
        let sumaGPM = 0;
        let sumaPSD = 0;
        let sumaVSD = 0;
        darbuotojai.forEach((darbininkas) => {
            sumaGPM += darbininkas.atlyginimas * 0.2;
            sumaPSD += darbininkas.atlyginimas * 0.0698;
            sumaVSD += darbininkas.atlyginimas * 0.1252;
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = 'Vardas: ' + darbininkas.vardas + ", Pavarde: " + darbininkas.pavarde + ", Atlyginimas: " + darbininkas.atlyginimas;
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
if (btnPrideti != null) {
    btnPrideti.onclick = () => {
        darbuotojai.push(new Darbuotojas(inpVardas.value, inpPavarde.value, inpAlga.valueAsNumber));
        outputDarbuotojai();
    };
}
outputDarbuotojai();
