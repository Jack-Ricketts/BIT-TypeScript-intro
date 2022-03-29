var Zmogus = /** @class */ (function () {
    function Zmogus(_vardas, _amzius, _email) {
        this._vardas = _vardas;
        this._amzius = _amzius;
        this._email = _email;
    }
    Zmogus.prototype.isvedimas = function () {
        console.log("Aš esu: " + this._vardas + " mano amzius: " + this._amzius);
    };
    Object.defineProperty(Zmogus.prototype, "amzius", {
        get: function () {
            return this._amzius;
        },
        set: function (amzius) {
            if (amzius < 18)
                throw new Error("Amzius per mazas");
            this._amzius = amzius;
        },
        enumerable: false,
        configurable: true
    });
    return Zmogus;
}());
var jonas = new Zmogus("Jonas", 32, "jonas@gmail.com");
var petras = new Zmogus("Petras", 22);
//petras.setAmzius(19);
petras.amzius = 10;
console.log(petras.amzius);
jonas.isvedimas();
petras.isvedimas();
