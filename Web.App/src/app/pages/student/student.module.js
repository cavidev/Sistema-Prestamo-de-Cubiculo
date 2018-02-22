/**
 * @author Carlos Mario Villafuerte
 * created on 08.02.2018
 */
(function () {
  'use strict';
  
    angular.module('BlurAdmin.pages.student', [
      'ui.select',
      'ngSanitize'])
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
          url: '/agregar_nuevo_estudiante',
          templateUrl: 'app/pages/student/add/addStudentView.html',
          controller: 'AddStudentCtrl',
          controllerAs: 'addStudent',
          title: 'Agregar',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('estudiante.actualizar', {
          url: '/actualizar_estudiante',
          templateUrl: 'app/pages/student/update/updateView.html',
          controller: 'UpdateStudentCtrl',
          controllerAs: 'updateStudent',
          title: 'Actualizar',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('estudiante.eliminar', {
          url: '/eliminar_estudiante',
          templateUrl: 'app/pages/student/delete/deleteStudentView.html',
          controller: 'DeleteStudentCtrl',
          controllerAs: 'deleteStudent',
          title: 'Eliminar',
          sidebarMeta: {
            order: 0,
          },
        })
    }
  })();