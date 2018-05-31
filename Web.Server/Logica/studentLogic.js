var studentConnection = require('../ConexionBDs/studentConnection.js');
var userRepository = require('../ConexionBDs/userRepository.js');

/**
 * Pide a la base de datos todos los estudiates registrados hasta el momento.
 * 
 * @param {JSON} data En este caso null ó ''
 * @param {function} callback Donde se devuelven los datos.
 */
exports.getStudents = function getStudents(data, callback) {
    studentConnection.GETSTUDENTS(data, (res) => {
        callback(res);
    });

}

exports.registerStudent = function registerStudent(data, callback) {
    //Verifica si hay un usuario con la misma cedula
    userRepository.getUserById({
        _userId: data.identification
    }, (res) => {
        if (res.success) {
            if ((res.data) == null) {
                //Verifica si hay un usuario con el mismo carnet.
                userRepository.getStudentById({
                    _studentId: data.carnet
                }, (res) => {
                    if (res.success) {
                        if ((res.data) == null) {
                            userRepository.addUser(generateDocumentToMongo(data), (res) => {
                                if (res.success) {
                                    studentConnection.DVBBESTUDIANTES_Insertar(data, (res) => {
                                        var eventWithConnectionSQLServer = res;
                                        if (eventWithConnectionSQLServer.success) {
                                            callback({
                                                success: true,
                                                data: eventWithConnectionsMongoDBs.data,
                                                message: {
                                                    title: '¡Inserción Completa!',
                                                    text: 'Los datos se insertaron correctamente, ahora puede iniciar sesión y disfrutar de los servicios de la biblioteca.'
                                                }
                                            });
                                        } else {
                                            /**
                                             * Cuando falla la insercion en SQL Server se elimina de MongoDB el resgistro recien agregado.
                                             */
                                            userRepository.deleteUser(generateDocumentToMongo(data), (res) => {
                                                var eventWithConnectionsMongoDBs = res;
                                                if (eventWithConnectionsMongoDBs.success) {
                                                    callback({
                                                        success: false,
                                                        message: {
                                                            title: 'Error!',
                                                            text: 'No se pudo insertar el usuario en la base de datos intentelo de nuevo. jajaja'
                                                        },
                                                        type: 'error'
                                                    });
                                                } else {
                                                    callback({
                                                        success: false,
                                                        title: eventWithConnectionSQLServer.message,
                                                        message: {
                                                            title: 'Error!',
                                                            text: 'No se pudieron ingresar los datos al sistema por falta de conexion con la base de datos,' +
                                                                ' y tampoco se pudieron eliminar los rastros de estos, por favor verificar la entrada al sistema y comunicar el error al personal de la biblioteca.'
                                                        },
                                                        type: 'error'
                                                    });
                                                }
                                            });
                                        }
                                    })
                                } else {
                                    callback({
                                        success: false,
                                        message: {
                                            text: 'Se perdio la conexión con la Base de Datos.',
                                            tittle: 'Perdida de conexión!'
                                        },
                                        type: 'error',
                                        error: 200
                                    })
                                }
                            });
                        } else {
                            callback({
                                success: false,
                                message: {
                                    text: 'Ya existe un usuario registrado con ese carnet',
                                    tittle: 'Peligro!'
                                },
                                type: 'warning',
                                error: 200
                            });
                        }
                    } else {
                        callback({
                            success: false,
                            message: {
                                text: 'Se perdio la conexión con la Base de Datos.',
                                tittle: 'Perdida de conexión!'
                            },
                            type: 'error',
                            error: 500
                        })
                    }
                })
            } else {
                callback({
                    success: false,
                    message: {
                        text: 'Ya existe un usuario registrado con ese número de cédula.',
                        tittle: 'Error!'
                    },
                    type: 'warning',
                    error: 500
                })
            }
        } else {
            callback({
                success: false,
                message: {
                    text: 'Se perdio la conexión con la Base de Datos.',
                    tittle: 'Perdida de conexión!'
                },
                type: 'error',
                error: 500
            })
        }
    });
}

function generateDocumentToMongo(data) {
    var document;
    document = {
        _userId: data.identification,
        _type: data.majors.label === 'Estudiante Colegio Científico' ? 'Estudiante Colegio Científico' : 'EstudianteTEC',
        _studentId: data.carnet,
        _name: data.firstName + ' ' + data.secondName,
        _lastname: data.firstLastName + ' ' + data.secondLastName,
        _department: data.majors.label,
        _sex: data.gender.label,
        _role: 'Visita',
        _visits: 0
    }
    return document;
}