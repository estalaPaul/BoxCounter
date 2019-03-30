const EventEmitter = require('events');
const startAnimation = require('../main.js');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

module.exports = myEmitter;
