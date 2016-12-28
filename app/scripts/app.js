'use strict';

/**
 * @ngdoc overview
 * @name tuleapClienteApp
 * @description
 * # tuleapClienteApp
 *
 * Main module of the application.
 */
angular
  .module('tuleapClienteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'afOAuth2',
    'treeControl',
    'ngMaterial',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.treeView',
    'ui.grid.selection',
    'ui.grid.exporter',
    'tuleapService'
  ])
    .config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("");
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/historias_usuario', {
        templateUrl: 'views/historias_usuario.html',
        controller: 'HistoriasUsuarioCtrl',
        controllerAs: 'historiasUsuario'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
