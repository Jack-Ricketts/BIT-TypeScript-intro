var output = document.getElementById("atsakymasin");
var btSkaiciuotiCm = document.getElementById("skaiciuoticm");
var inCm = document.getElementById("var_cm");
var distance = function (p) {
    return p.x * 0.393701;
};
var atsakymas = {
    x: 1
};
var fSuskaiciuotiCm = function () {
    atsakymas.x = +inCm.value;
    if (output != null) {
        output.innerHTML = distance(atsakymas) + " in";
    }
};
if (btSkaiciuotiCm != null) {
    btSkaiciuotiCm.onclick = fSuskaiciuotiCm;
}
