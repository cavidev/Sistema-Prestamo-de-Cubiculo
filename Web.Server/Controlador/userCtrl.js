var studentLogic = require('../Logica/studentLogic.js');

/**
 * Obtiene todos los registros de la base de datos, ya sea los estudiantes registrados ó de los funcionarios registrados
 * 
 * @param {any} request Cuerpo 
 * @param {any} response Respuesta del servidor. 
 */
exports.getStudent = function getStudent(request, response) {
    console.log(request.params);
    switch (request.params.typeOfUser) {
        case 'students':
            studentLogic.getStudents({}, (res) => {
                response.send(res);
            });
            break;

        default:
            break;
    }
};

/**
 * Peticion solicitada.
 * 
 * @param {any} request Datos de entrada al servidor peticion GET: request.params, POST: request.body
 * @param {any} response Envio de datos hacia la aplicacion WEB.
 */
exports.registerNewUser = function registerNewUser(request, response) {
    switch (request.body.typeOfUser) {
        case 'student':
            studentLogic.registerStudent(request.body, (res) => {
                response.send(res); //Forma en la que responde el servidor.
            });
            break;

        case 'functionary':

            break;

        case 'admin':

            break;

        default:
            break;
    }
};

/**
 * TODO: Hacer el metodo de actualización de usuarios.
 * 
 * @param {any} request 
 * @param {any} response 
 */
exports.updateUser = function updateUser(request, response) {

}