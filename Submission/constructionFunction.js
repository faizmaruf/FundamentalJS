class Car {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.engineStatus = 'off';
    }
    engineStart() {
        this.engineStatus = 'on';
        console.log('engine start');
    }
    engineStop() {
        this.engineStatus = 'offg';
        console.log('engine stop');
    }
    isEngineOn = () => {
        this.engineStatus == 'on' ? console.log('engine on') : console.log('engine off')
        console.log(this.engineStatus);
    }
}

const avanza = new Car('keluarga', 'merah');
avanza.engineStart();
console.log(avanza);
avanza.isEngineOn();
console.log('------------------------------')
const mobilio = new Car('keluarga', 'kuning');
console.log(mobilio);
