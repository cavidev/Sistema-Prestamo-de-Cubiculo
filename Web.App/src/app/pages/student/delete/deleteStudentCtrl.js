/**
 * @author Carlos Mario Villafuerte
 * created on 08.02.2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.student')
        .controller('DeleteStudentCtrl', DeleteStudentCtrl);

    /** @ngInject */
    function DeleteStudentCtrl($scope, studentService, $filter, editableOptions, editableThemes) {
        var vm = this;
        vm.smartTablePageSize = 10;
        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';
        vm.studentToDelete = {};


        /*
        vm.allStudent = [{
                id: 1,
                firstName: 'Carlos1',
                secondName: 'Mario',
                firstLastName: 'Villafuerte',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            },
            {
                id: 2,
                firstName: 'Sergio',
                secondName: 'Andres',
                firstLastName: 'Villafuerte',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            },
            {
                id: 3,
                firstName: 'Leidy',
                secondName: 'Penelope',
                firstLastName: 'Chacón',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            },
            {
                id: 4,
                firstName: 'Esteban',
                secondName: 'Gabriel',
                firstLastName: 'Blanco',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            },
            {
                id: 5,
                firstName: 'Carlos5',
                secondName: 'Mario',
                firstLastName: 'Villafuerte',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            },
            {
                id: 6,
                firstName: 'Carlos',
                secondName: 'Mario',
                firstLastName: 'Villafuerte',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            },
            {
                id: 7,
                firstName: 'Carlos8',
                secondName: 'Mario',
                firstLastName: 'Villafuerte',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            },
            {
                id: 8,
                firstName: 'Carlos',
                secondName: 'Mario',
                firstLastName: 'Villafuerte',
                secondLastName: 'Díaz',
                email: 'carlosmario.villafuerted66@gmail.com',
                identification: '504080112',
                carnet: '2015124066',
                gender: 'Masculino',
                majors: 'Ingenieria en Computación'
            }
        ];*/

        vm.bringAllStudents = function bringAllStudents() {
            studentService.bringAllStudents(function (res) {
                console.log(res);
                vm.allStudent = res.data;
            });
        }

        vm.loadDataStudent = function loadDataStudent(student) {
            //new json object here;
            vm.studentToDelete = JSON.parse(JSON.stringify(student));
        }
    }
})();

function cloneJSON(obj) {
    // basic type deep copy
    if (obj === null || obj === undefined || typeof obj !== 'object') {
        return obj
    }
    // array deep copy
    if (obj instanceof Array) {
        var cloneA = [];
        for (var i = 0; i < obj.length; ++i) {
            cloneA[i] = cloneJSON(obj[i]);
        }
        return cloneA;
    }
    // object deep copy
    var cloneO = {};
    for (var i in obj) {
        cloneO[i] = cloneJSON(obj[i]);
    }
    return cloneO;
}