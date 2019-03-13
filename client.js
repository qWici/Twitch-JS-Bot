let tmi = require ('tmi.js');
const config = require('./config.js')
let client = new tmi.client(config);

module.exports = client
