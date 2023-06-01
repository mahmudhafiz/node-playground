// CommonJS, every file is a module
// Module - Encapsulated code (only share minimum)
const names = require('./4-names');
const printName = require('./5-utils');
const gotName = require('./6-alternative-flavor');
require('./7-mind-grenade');


//console.log(gotName);
printName(names?.peter);