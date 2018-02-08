/**
 * @author Carlos Mario Villafuerte
 * created on 08.02.2018
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.estudiante')
        .controller('AgregarEstudianteCtrl', AgregarEstudianteCtrl);
  
    /** @ngInject */
    function AgregarEstudianteCtrl($scope) {
     var agregarEstudiante = this;
  
     agregarEstudiante.saludar = "Hola, estoy en el controlador";
     
    }
  })();