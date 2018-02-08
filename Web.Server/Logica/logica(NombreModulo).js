var conexion_NombreModulo_ = require('../ConexionBDs/conexion(NombreModulo).js');

exports.logicaPeticion = function logicaPeticion(datos, callback) {
    //Funciones de logica, para no sobrecargar al cliente, se ralizan todos los procesos pesados aqui se piden datos desde bases de datos y luego se envian por medio del servidor.
    conexion_NombreModulo_.obtenerDatosDesdeBDs(datos, function(res) {
        var suma = 3 + 4 * 89;
        res.resultado = suma;
        callback(res); //SE DEVUELVE RES
    });
}