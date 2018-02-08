/**
 * @author Carlos Mario Villafuerte
 * created on 08.02.2018
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.estudiante', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('estudiante', {
          url: '/estudiante',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Estudiante',
          sidebarMeta: {
            icon: 'ion-person',
            order: 100,
          },
        })
        .state('estudiante.agregar', {
          url: '/estudiante_agregar',
          templateUrl: 'app/pages/estudiante/agregar/agregar.html',
          controller: 'AgregarEstudianteCtrl',
          controllerAs: 'agregarEstudiante',
          title: 'Agregar',
          sidebarMeta: {
            order: 0,
          },
        })
    }
  })();