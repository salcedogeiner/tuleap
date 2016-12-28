'use strict';

/**
 * @ngdoc directive
 * @name tuleapClienteApp.directive:verHu
 * @description
 * # verHu
 */
angular.module('tuleapClienteApp')
  .directive('verHu', function (tuleapRequest) {
    return {
      restrict: 'E',
      scope: {
          idhu:'='
        },
      templateUrl: 'views/directives/ver_hu.html',
      controller:function($scope){
        var ctrl = this;
        ctrl.nuevo_comentario={};

        ctrl.eliminar_comentario=function(comentarioId,tarea){
          tuleapRequest.delete("comentario",comentarioId).then(function(){
            tarea.Comentarios=ctrl.ver_comentarios(tarea);
          });
        };

        ctrl.agregar_comentario=function(tarea){
          if (ctrl.nuevo_comentario!={}) {
            ctrl.nuevo_comentario.Tarea=tarea;
            tuleapRequest.post("comentario",ctrl.nuevo_comentario).then(function(response){
              console.log(response.data);
              tarea.Comentarios=ctrl.ver_comentarios(tarea);
              ctrl.nuevo_comentario={};
            });
          }
        };
        ctrl.ver_comentarios=function(tarea){
          var comentarios=[];
          tuleapRequest.get("comentario",$.param({
            query: "Tarea:"+tarea.Id,
            sortby: "Id",
            order: "asc",
            limit: 0
          })).then(function(response){
            console.log(response);
            comentarios.push(response.data);
          });
          return comentarios;
        };

        ctrl.cargar_tareas=function(){
          tuleapRequest.get("tarea",$.param({
            query: "historiaUsuario:"+ctrl.historia.Id,
            sortby: "Id",
            order: "asc"
          })).then(function(response){
            ctrl.tareas=response.data;
          });
        };

        $scope.$watch('idhu', function() {
          //$scope.ver=false;
          tuleapRequest.get("historia_usuario",
          $.param({
            query: "Id:"+$scope.idhu
          })).then(function(response){
            ctrl.historia=response.data[0];
          });
        });

      },
      controllerAs:'d_verHu'
    };
  });
