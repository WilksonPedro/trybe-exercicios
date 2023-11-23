var Tv = /** @class */ (function () {
    function Tv(brand, size, resolution, connections) {
        console.log("cria\u00E7\u00E3o da tv ".concat(brand));
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    Tv.prototype.turnOn = function () {
        console.log("Sua tv ".concat(this.brand, " tem as seguinte especifica\u00E7\u00F5es ").concat(this.size, ", ").concat(this.resolution, ", ").concat(this.connections, "."));
    };
    return Tv;
}());
var minhaTv = new Tv('LG', 40, 1080, 'hdmi');
minhaTv.turnOn();
