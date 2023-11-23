class Tv {
    brand: string;
    size: number;
    resolution: number;
    connections: string;
    connectedTo?: string;
    
    constructor(brand: string, size: number, resolution: number, connections: string) {
        console.log(`criação da tv ${brand}`);
        
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }

    turnOn():void {
        console.log(`Sua tv ${this.brand} tem as seguinte especificações ${this.size}, ${this.resolution}, ${this.connections}.`);
    }
}

const minhaTv = new Tv('LG', 40, 1080, 'hdmi');
minhaTv.turnOn();
