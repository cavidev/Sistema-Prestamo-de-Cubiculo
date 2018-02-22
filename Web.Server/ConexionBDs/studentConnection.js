//Conexion con SqlServer y MongoDb
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var sqlConect = require('../Conexiones/sqlConect.js');
var mongoConect = require('../Conexiones/connection.js');

exports.obtenerDatosDesdeBDs = function PasarDatos_CSV_a_Mongo(_datos, callback) {
    callback({success: true, message: {text: "estoy dentro, hasta el ultimo paso de los modulos.", tittle: 'Exito'}, type: 'success'  });
    /*
    var queryParams = {
        query: { "nombre llave": _datos."especificar el valor" },
        collection: 'nombre de la colección'
    } 
    mongoConect.findDocuments(queryParams, callback);
    */
};

exports.DVBBESTUDIANTES_Insertar = function DVBBESTUDIANTES_Insertar(data, callback) {
    var request = new Request('[pr_DVBBESTUDIANTES_Insertar]', function(err) {
        if (err) {
            console.log({
                message: "err"
            });
        }
    });
    request.addParameter('sPER_NOMBRE1', TYPES.VarChar, data.firtName);
    request.addParameter('sPER_NOMBRE2', TYPES.VarChar, data.secundName);
    request.addParameter('sPER_APELLIDO1', TYPES.VarChar, data.firtLastName);
    request.addParameter('sPER_APELLIDO2', TYPES.VarChar, data.secundLastName);
    request.addParameter('iPER_SEXO', TYPES.Int, data.gender.value);
    request.addParameter('iID_CARRERA', TYPES.Int, data.majors.value);
    request.addParameter('sEST_CARNE', TYPES.VarChar, data.carnet);
    request.addOutputParameter('iID_ESTUDIANTE', TYPES.Int);
    request.addOutputParameter('sCodError', TYPES.VarChar);
    request.addOutputParameter('iStatus', TYPES.Int);
    sqlConect.callProcedure(request, callback);
};