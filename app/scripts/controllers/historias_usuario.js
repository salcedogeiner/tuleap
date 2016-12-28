'use strict';

/**
 * @ngdoc function
 * @name tuleapClienteApp.controller:HistoriasUsuarioCtrl
 * @description
 * # HistoriasUsuarioCtrl
 * Controller of the tuleapClienteApp
 */
angular.module('tuleapClienteApp')
  .controller('HistoriasUsuarioCtrl', function (tuleapRequest) {
    var self = this;
    //self.historias_usuario=[];
    self.historiasel={};

    self.seleccionarhu=function(hu){
      self.historiasel=hu;
    };

    tuleapRequest.get("historia_usuario","").then(function(response){
      self.historias_usuario=response.data;
    });
  });
