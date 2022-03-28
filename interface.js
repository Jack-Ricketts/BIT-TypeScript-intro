var apsilankymas = function (lankytojas) {
    console.log('Pas mus apsilanke ' + lankytojas.vardas + ', kurio amzius ' + lankytojas.amzius);
};
var paliko = function (lankytojas) {
    console.log(lankytojas.vardas + ' isejo, kurio amzius ' + lankytojas.amzius);
};
var lankytojas = {
    vardas: 'Jonas',
    amzius: 32
};
apsilankymas(lankytojas);
paliko(lankytojas);
var xyFunkcija = {
    x: 2,
    y: 2
};
var taskas = function (p) {
    console.log(Math.sqrt((p.x * p.x + p.y * p.y)));
};
taskas(xyFunkcija);
