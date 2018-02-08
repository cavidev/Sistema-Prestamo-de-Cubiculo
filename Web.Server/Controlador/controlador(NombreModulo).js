var logica_NombreModulo_ = require('../Logica/logica(NombreModulo).js');
/**
 * Peticion solicitada.
 * 
 * @param {any} request Datos de entrada al servidor peticion GET: request.params, POST: request.body
 * @param {any} response Envio de datos hacia la aplicacion WEB.
 */
exports.peticion = function peticion(request, response) {
    //llamada a uno de las funciones de logica, se puede dividir en funciones CRUD
    logica_NombreModulo_.logicaPeticion(request.body, function(res) {
        response.send(res); //Forma en la que responde el servidor.
    });
};