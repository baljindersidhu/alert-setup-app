/**
* defines routing states for application
* defaults to home state when no route matches
*/
(function () {
  'use strict';

  angular.module('SetupApp')
  .config(RoutesConfiguration);

  RoutesConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfiguration($stateProvider, $urlRouterProvider) {
    // default route
    $urlRouterProvider.otherwise('/home')

    // home-state
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'states/home/templates/home.template.html',
      controller: 'HomeController as vm'
    })
    .state('home.systems',{
      url: '/systems',
      templateUrl: 'states/systems/templates/systems.home.template.html',
      resolve: {
        // fetch all connectors here
        ConnectorsData: [
          'SystemsDataService' , (SystemsDataService) => {
            return SystemsDataService.getAllConnectors();
          }
        ]
      },
      controller: 'SystemsController as vm'
    })
  }
})()
