//Comunicacion entre diferentes rchivos JS
const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');


const crearArchivo = async (base, listar = 'false' , hasta) => {

    try {


        let salida = '';

        for (let i = 0; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i}  \n`);
        }

        fs.writeFileSync(`./salida/tabla-${base}txt`, salida);

        if (listar) {
            console.log('============================================'.blue);
            console.log(`Tabla del ${base} hasta el número ${hasta}`);
            console.log('============================================'.blue);
            console.log(salida);
        }

        return (`Tabla del ${base} hasta el número ${hasta} creada`);
    } catch (error) {
        throw error;
    }
}

//Exportando una funcion de este archivo a otro que la llame importandola
module.exports = {
    crearArchivo
}