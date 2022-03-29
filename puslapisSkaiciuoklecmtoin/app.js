var output = document.getElementById("atsakymasin");
var btSkaiciuotiCm = document.getElementById("skaiciuoticm");
var inCm = document.getElementById("var_cm");
var cm;
var vertimas = function (cm) {
    return cm * 0.393701;
};
var fSuskaiciuotiCm = function () {
    cm = +inCm.value;
    if (output != null) {
        output.innerHTML = vertimas(cm) + " in";
    }
};
if (btSkaiciuotiCm != null) {
    btSkaiciuotiCm.onclick = fSuskaiciuotiCm;
}
