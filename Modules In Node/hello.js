// In javascript every .js file is a form of module
// when we break large codebase into small moudles is called modular programming

// we use require keyword for importing other module or file.js
// always need to export from other file

const math = require('./math.js');   //    ./file------search in curreny user directory
//const name = require('node packaged name')   // search in node dir built-in

//console.log(math);  //akash
//console.log(math(5,10));  //15 ------------  for single function

// for multiple function
console.log(math);
console.log(math.add(100,20));
//console.log(math.sub(90,2));
console.log(math.Minus(200,44));






















