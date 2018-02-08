//Conexion con SqlServer y MongoDb
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var sqlConect = require('../Conexiones/sqlConect.js');
var mongoConect = require('../Conexiones/connection.js');

exports.obtenerDatosDesdeBDs = function PasarDatos_CSV_a_Mongo(_datos, callback) {
    callback({ mensaje: "estoy dentro, hasta el ultimo paso de los modulos." });
    /*
    var queryParams = {
        query: { "nombre llave": _datos."especificar el valor" },
        collection: 'nombre de la colección'
    } 
    mongoConect.findDocuments(queryParams, callback);
    */
};

function NOMBRE_PROCEDIMIENTO_ALMACENADO(_datos, callback) {
    /*
    var request = new Request('NOMBRE_PROCEDIMIENTO_ALMACENADO', function(err) {
        if (err) {
            console.log({
                message: "err"
            });
        }
    });

    request.addParameter('PARAMETRO1', TYPES.Date, _datos);
    request.addParameter('PARAMETRO2', TYPES.VarChar, _datos);
    sqlConect.callProcedure(request, function(res) {
        console.log(res);
    });
    */
};