// every file is a module 
// module is encapsulated

//import the names
const name = require('./4-name');
const sayHi= require('./5-util');
const alter = require('./6-alternative')
console.log(alter)

require('./7-mindgrenade')


sayHi('deepank')
sayHi(name.deenesh)
sayHi(name.deepak) 