const { crearArchivo } = require("./helpers/multiplicar")
const argv = require("./config/yargs.js")
require("Colors")

console.clear()

crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, "Creado"))
    .catch(err => console.log(err))
