(function () {
    'use strict';
    angular
        .module('BlurAdmin.pages.student')
        .factory('studentService',
            function (requestService) {

                var typeOfUsers = [
                    'Estudiante TEC',
                    'Administrativo',
                    'Docente',
                    'Docente Colegio Científico',
                    'Estudiante Colegio Científico',
                    'Investigador',
                    'Usuario externo'
                ];
                var majors = [{
                        label: 'Estudiante',
                        value: 1
                    },
                    {
                        label: 'Ingeniería en Computación',
                        value: 4
                    },
                    {
                        label: 'Administración de Empresas',
                        value: 3
                    },
                    {
                        label: 'Ingeniería en Agronomía',
                        value: 2
                    },
                    {
                        label: 'Ingeniería en Producción Industrial',
                        value: 5
                    },
                    {
                        label: 'Gestión del Turismo Rural Sostenible',
                        value: 7
                    },
                    {
                        label: 'Ingeniería en Electrónica',
                        value: 6
                    },
                    {
                        label: 'Estudiante Colegio Científico',
                        value: 8
                    }
                ];

                var departments = [
                    'CTEC',
                    'DEVESA',
                    'Biblioteca',
                    'Dirección Administrativa',
                    'Financiero Contable',
                    'Laboratorios',
                    'Soporte Técnico',
                    'Zona Económica Especial'
                ];

                var schools = [
                    'Escuela de Computación',
                    'Escuela de Administración',
                    'Escuela de Idiomas y Ciencias Soc.', //buscar nombres 2
                    'Escuela de Ciencias Naturales y Exac.',
                    'Escuela de Producción',
                    'Escuela de Agronomía',
                    'Escuela de Electrónica',
                    'Escuela de Turismo'
                ];


                var registerNewUser = function registerNewUser(user, callback) {
                    requestService.postRequest({
                            params: "",
                            data: user
                        }, {
                            url: '/registerNewUser'
                        })
                        .then(function (result) {
                            callback(result);
                        });
                };

                var bringAllStudents = function bringAllStudents(callback) {
                    requestService.getRequest({
                        params: 'students',
                        data: ''
                    }, {
                        url: '/getStudent/'
                    }).then(function (result) {
                        callback(result);
                    });
                }

                return {
                    getTypeOfUsers: function () {
                        return typeOfUsers;
                    },
                    getMajors: function () {
                        return majors;
                    },
                    getDepartments: function () {
                        return departments;
                    },
                    getSchools: function () {
                        return schools;
                    },
                    registerNewUser: function (user, callback) {
                        registerNewUser(user, callback)
                    },
                    bringAllStudents: function (callback) {
                        bringAllStudents(callback)
                    }
                };
            });
})();