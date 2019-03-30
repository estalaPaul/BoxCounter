const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');
const readLine = new ReadLine({ delimiter: '\n'});
const myEmitter = require('./EventEmitter');

class Arduino extends SerialPort {
    constructor () {
        let x = false;
        let regex = /[0-9]+/;
        super('/dev/ttyUSB0', 9600);
        const parser = this.pipe(readLine);
        const { ipcRenderer } = require('electron');
        parser.on('data', (data) => {
            if (data.trim() === 'Start') {
                myEmitter.emit('start-animation');
                console.log("event");
            }
            if (data.trim() === 'Garra') {
                myEmitter.emit('garra-ready');
            }
            if (regex.test(data.trim())) {
                myEmitter.emit('counter', data.trim());
            }
        });
    }

}

module.exports = Arduino;
