const  argv = require('./config/yargs');
const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

console.log(argv);

crearArchivo(argv.b , argv.l , argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.italic.bgCyan, 'Archivo creado'))
    .catch(err => console.log(err));