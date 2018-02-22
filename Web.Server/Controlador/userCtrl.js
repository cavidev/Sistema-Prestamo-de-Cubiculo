var studentLogic = require('../Logica/studentLogic.js');
/**
 * Peticion solicitada.
 * 
 * @param {any} request Datos de entrada al servidor peticion GET: request.params, POST: request.body
 * @param {any} response Envio de datos hacia la aplicacion WEB.
 */
exports.registerNewUser = function registerNewUser(request, response) {
    console.log(request.body);
    switch (request.body.typeOfUser) {
        case 'student':
            studentLogic.registerStudent(request.body, function(res) {
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