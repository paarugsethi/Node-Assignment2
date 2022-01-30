const path = require('path');

// __dirname, __filename
console.log(__dirname);
console.log(__filename);

const index = 'E:/Paarug PC/MasaiMaterial/unit5/assignment2/index.js';
// Dirname
console.log("Dirname:", path.dirname(index));

// Basename
console.log("Basename:", path.basename(index));

// Extname
console.log("Extname:", path.extname(index));

// JOIN
const eg = "path.txt";
console.log("Path:", path.join('/', 'users', 'unit5', eg));

// FORMAT
const format = 'format.txt';
path.format({ dir: '/users/unit5', base: format });

// PARSE
const parse = 'parse.txt';
console.log('Path', path.parse('E:/Paarug PC/MasaiMaterial/unit5/assignment2/index.js'));