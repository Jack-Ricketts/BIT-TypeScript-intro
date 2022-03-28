//types
var x = 10;
var vyras = false;
var vardas = "Jonaitis";
var kazkas = 55;
var savaitesTemperaturos = [1, 5, 3, 4];
var darbuotojuSarasas = ['Jonaitis', 'Petraitis'];
var Spalva;
(function (Spalva) {
    Spalva[Spalva["Juoda"] = 0] = "Juoda";
    Spalva[Spalva["Balta"] = 1] = "Balta";
    Spalva[Spalva["Geltona"] = 2] = "Geltona";
})(Spalva || (Spalva = {}));
;
var dazai = Spalva.Geltona;
function suma(x, y) {
    return x + y;
}
var rezultatas = suma(1, 2);
console.log(rezultatas);
//---------
var faktorialas = function (n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};
console.log("Skaičiaus 5 faktorialas:" + faktorialas(5));
console.log("Skaičiaus 3 faktorialas:" + faktorialas(3));
//Task 1
var bdd = function (a, b) {
    var dalinasiIs;
    for (var i = 1; i <= Math.max(a, b); i++) {
        if (a % i == 0 && b % i == 0) {
            dalinasiIs = i;
        }
    }
    return dalinasiIs;
};
console.log(bdd(3, 5));
