var studentConnection = require('../ConexionBDs/studentConnection.js');
var userRepository = require('../ConexionBDs/userRepository.js');

exports.registerStudent = function registerStudent(data, callback) {
    //Verifica si hay un usuario con la misma cedula
    userRepository.getUserById({ _userId: data.identification }, function(res) {
        if (res.success) {
            if ((res.data) == null) { 
                //Verifica si hay un usuario con el mismo carnet.
                userRepository.getStudentById({ _studentId: data.carnet }, function(res) {
                    if (res.success) {
                        if ((res.data) == null) {
                            data._visits = 0;
                            data._role = 'Visita';
                            //TODO: MODIFICAR EL DATA PARA QUE LO RECIBA MONGO...
                            userRepository.addUser(data, function(res) {
                                if (res.success) {
                                    studentConnection.DVBBESTUDIANTES_Insertar(data, function(res) {
                                        if (!res.success) {
                                            callback({
                                                success:false,
                                                message: {text: 'Ocurrio un error en la conexión con la base de datos, por favor intentelo nuevamente', tittle: 'Error!'},
                                                type: 'warning',
                                                error: 200
                                            });
                                        } else {
                                            if (res.data[0][0] === 'El carné ya existe') {
                                                callback({
                                                    success:false,
                                                    message: {text: 'El carné ya existe', tittle: 'Error!'},
                                                    type: 'error',
                                                    error: 200
                                                });
                                            } 
                                        }
                                    });
                                } else {
                                    callback(res);
                                }
                            })
                        } else {
                            callback({
                                success:false,
                                message: {text: 'Ya existe un usuario registrado con ese carnet en una de la bases de datos, acérquese a ventanilla para el respectivo registro', tittle: 'Peligro!'},
                                type: 'warning',
                                error: 200
                            });
                        }
                    } else {
                        callback({
                            success:false,
                            message: {text: 'El carné ya existe', tittle: 'Error!'},
                            type: 'error',
                            error: 200
                        });
                    }
                }); 
            } else {
                callback({
                    success:false,
                    message: {text: 'Ya existe un usuario registrado con ese número de cédula en una de la bases de datos, acérquese a ventanilla para el respectivo registro', tittle: 'Peligro!'},
                    type: 'warning',
                    error: 200
                })
            }
        } else {
            if (res.data != null) {
                callback({
                    success:false,
                    message: {text: 'Error del sistema: Ha ocurrido un error, por favor intentelo nuevamente. Si el problema persiste contacte al administrador del sistema.', tittle: 'Error!'},
                    type: 'error',
                    error: 200
                })
            } else {
                callback(res)
            }
        };
    });
}