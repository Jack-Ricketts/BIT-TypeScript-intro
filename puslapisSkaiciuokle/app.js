var output = document.getElementById("atsakymas");
var btSkaiciuoti = document.getElementById("skaiciuoti");
var inX = document.getElementById("var_x");
var inY = document.getElementById("var_y");
var distance = function (p) {
    return Math.sqrt(p.x * p.x + p.y * p.y);
};
var taskas = {
    x: 5,
    y: 5
};
var fSuskaiciuoti = function () {
    taskas.x = +inX.value;
    taskas.y = +inY.value;
    if (output != null) {
        output.innerHTML = "Atsakymas: " + distance(taskas);
    }
};
if (btSkaiciuoti != null) {
    btSkaiciuoti.onclick = fSuskaiciuoti;
}
