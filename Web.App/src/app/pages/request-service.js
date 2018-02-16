/**
 * @ngdoc Service
 * @name BiblioStatApp
  * @author Antony Durán Hernández
 * @description
 * # requestService
 * Servicio de gestión de solicitudes http
 */

'use strict';

angular.module('BlurAdmin.pages')
.factory('requestService', function ($http) {
    //var url = 'http://169.254.82.137:8081'
    //TODO: Averiguar si el servidor de la biblioteca puede acceder a las rutas 3000, 3001, 3002 
    var url = 'http://172.24.41.238:9002'
    return {
      getRequest: function (data, configs) {
        return $http(
          {
            method: 'GET',
            url: url + configs.url + data.params,
            data: data.data
          })
          .then(function(response) {
            return response.data;

          }, 
          function errorCallback(response) {
            return {success: false, data: null};
      });
      },

      postRequest: function(data, configs) {
        return $http(
          {
            method: 'POST',
            url: url + configs.url + data.params,
            data: data.data
          })
          .then(function(response) {
            return response.data;
          }, 
          function errorCallback(response) {
            return {success: false, data: null};
        });
      },

      putRequest: function (data, configs) {
        return $http(
          {
            method: 'PUT',
            url: configs.url + data.params,
            data: data.data
          })
          .then(function(response) {
            return response.data;
          }, 
          function errorCallback(response) {
            return {success: false, data: null};
      });
      },

      deleteRequest: function (data, configs) {
        return $http(
          {
            method: 'DELETE',
            url: configs.url + data.params,
            data: data.data
          })
          .then(function(response) {
            return response.data;
          }, 
          function errorCallback(response) {
            return {success: false, data: null};
      });
      }
        
    };
});
