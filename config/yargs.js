const argv = require("yargs")
                .option("b",{
                    alias:"base",
                    type:"number",
                    demandOption: true,
                    describe:"Es la base de la tabla de multiplicar"
                })
                .option("l",{
                    alias:"listar",
                    type:"boolean",
                    default:"false",
                    describe:"Muestra tabla en consola"
                })
                .option("h",{
                    alias:"hasta",
                    type:"number",
                    demandOption: true,
                    describe:"Hasta donde se va a llevar la tabla"
                })
                .check((argv, options)=>{
                    if(isNaN(argv.b)){
                        throw "La base debe ser un numero"
                    }
                    if(isNaN(argv.h)){
                        throw "El alcance de la tabla debe ser un numero"
                    }
                    return true
                })
                .argv

module.exports = argv