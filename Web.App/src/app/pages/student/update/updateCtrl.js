/**
 * @author Carlos Mario Villafuerte
 * created on 08.02.2018
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.student')
        .controller('UpdateStudentCtrl', ActualizarEstudianteCtrl);
  
    /** @ngInject */
    function ActualizarEstudianteCtrl($scope, registerService) {
     var vm = this;
     vm.gender = [
        {label: 'Masculino', value: 0},
        {label: 'Femenino', value: 1}
    ];

    vm.majors = registerService.getMajors();

    vm.dateStudent = {
                carnet: undefined,
                identification: undefined,
                email: undefined,
                firtName: undefined,
                secondName: undefined,
                firtLastName: undefined,
                secondLastName: undefined,
                gender: vm.gender[0].label,
                majors: vm.majors[0].label
            };
  
     vm.saludar = "Hola, estoy en el controlador de actualizar";
     
    }
  })();