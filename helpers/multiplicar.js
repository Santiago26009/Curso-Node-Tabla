const fs = require("fs")
const colors = require("Colors")

const crearArchivo = async (base = 5, listar, hasta) => {
    try {
        console.log("Tabla del ".green, colors.blue(base))

        let salida = ""
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (listar) {
            console.log(salida)
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return (`Archivo de la tabla del ${base}`)
    } catch (error) {
        throw error
    }

}

module.exports = { crearArchivo }