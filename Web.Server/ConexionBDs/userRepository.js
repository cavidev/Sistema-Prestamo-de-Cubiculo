var dbConnection = require('../Conexiones/connection.js');

exports.getStudentById = function(data, callback) {
    var queryParams = {
        query: { _studentId: data._studentId },
        collection: 'users'
    };
    dbConnection.findOneDocument(queryParams, callback);
};

exports.getUserById = function(data, callback) {
    var queryParams = {
        query: { _userId: data._userId },
        collection: 'users'
    };
    dbConnection.findOneDocument(queryParams, callback);
};

exports.addUser = function(data, callback) {
    var queryParams = {
        query: data,
        collection: 'users'
    };
    dbConnection.addDocument(queryParams, callback);
};

exports.updateVisitorsVisits = function(sex, callback) {
    var queryParams;
    if (sex == 'Femenino') {
        queryParams = {
            findQuery: { _type: 'Usuario externo' },
            updateQuery: {
                $inc: { _womenVisits: 1 }
            },
            collection: 'users'
        };
    } else {
        queryParams = {
            findQuery: { _type: 'Usuario externo' },
            updateQuery: {
                $inc: { _menVisits: 1 }
            },
            collection: 'users'
        };
    }


    dbConnection.updateDocument(queryParams, callback);
};

exports.updateUsersVisits = function(user, callback) {
    //console.log('console.log(user);');
    //console.log(user);
    var queryParams;
    if (user._type == 'Estudiante Colegio Científico') {
        queryParams = {
            findQuery: { _studentId: user._studentId },
            updateQuery: {
                $inc: { _visits: 1 }
            },
            collection: 'users'
        };
    } else {
        queryParams = {
            findQuery: { _userId: user._userId },
            updateQuery: {
                $inc: { _visits: 1 }
            },
            collection: 'users'
        };
    }
    dbConnection.updateDocument(queryParams, callback);
};

exports.deleteUser = function(data, callback) {
    var queryParams = {
        query: { _userId: data._userId },
        collection: 'users'
    };
    dbConnection.deleteDocument(queryParams, callback);
};