//Conexion con SqlServer y MongoDb
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var sqlConect = require('../Conexiones/sqlConect.js');
var mongoConect = require('../Conexiones/connection.js');

exports.obtenerDatosDesdeBDs = function PasarDatos_CSV_a_Mongo(_datos, callback) {
    callback({
        success: true,
        message: {
            text: "estoy dentro, hasta el ultimo paso de los modulos.",
            tittle: 'Exito'
        },
        type: 'success'
    });
    /*
    var queryParams = {
        query: { "nombre llave": _datos."especificar el valor" },
        collection: 'nombre de la colección'
    } 
    mongoConect.findDocuments(queryParams, callback);
    */
};

/**
 * TODO: Averiguar el procedimiento almacenado para recuperar todos los estudiantes de la base de datos SQL Server.
 * 
 * @param {any} data 
 * @param {any} callback 
 */
exports.GETSTUDENTS = function GETSTUDENTS(data, callback) {

    var response = {
        success: true,
        message: {
            title: 'Exito!',
            text: 'Se recuperaron todos los usuarios de la base de datos.'
        },
        data: [{
                id: 1,
                firstName: 'Carlos1',
                secondName: 'Mario',
                firstLastName: 'Villafuerte',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            },
            {
                id: 2,
                firstName: 'Sergio',
                secondName: 'Andres',
                firstLastName: 'Villafuerte',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            },
            {
                id: 3,
                firstName: 'Leidy',
                secondName: 'Penelope',
                firstLastName: 'Chacón',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            },
            {
                id: 4,
                firstName: 'Esteban',
                secondName: 'Gabriel',
                firstLastName: 'Blanco',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            },
            {
                id: 5,
                firstName: 'Carlos5',
                secondName: 'Mario',
                firstLastName: 'Villafuerte',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            },
            {
                id: 6,
                firstName: 'Carlos',
                secondName: 'Mario',
                firstLastName: 'Villafuerte',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            },
            {
                id: 7,
                firstName: 'Carlos8',
                secondName: 'Mario',
                firstLastName: 'Villafuerte',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            },
            {
                id: 8,
                firstName: 'Carlos',
                secondName: 'Mario',
                firstLastName: 'Villafuerte',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            }
        ],
        type: 'success'
    };

    callback(response);
}

exports.DVBBESTUDIANTES_Insertar = function DVBBESTUDIANTES_Insertar(data, callback) {
    console.info(data);
    var request = new Request('[pr_DVBBESTUDIANTES_Insertar]', function (err) {
        if (err) {
            console.log({
                message: "err"
            });
        }
    });
    request.addParameter('sPER_NOMBRE1', TYPES.VarChar, data.firstName);
    request.addParameter('sPER_NOMBRE2', TYPES.VarChar, data.secundName);
    request.addParameter('sPER_APELLIDO1', TYPES.VarChar, data.firstLastName);
    request.addParameter('sPER_APELLIDO2', TYPES.VarChar, data.secundLastName);
    request.addParameter('iPER_SEXO', TYPES.Int, parseInt(data.gender.value));
    request.addParameter('iID_CARRERA', TYPES.Int, parseInt(data.majors.value));
    request.addParameter('sEST_CARNE', TYPES.VarChar, toString(data.carnet));
    request.addOutputParameter('iID_ESTUDIANTE', TYPES.Int);
    request.addOutputParameter('sCodError', TYPES.VarChar);
    request.addOutputParameter('iStatus', TYPES.Int);
    sqlConect.callProcedure(request, callback);
};