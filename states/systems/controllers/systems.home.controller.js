(function () {
  'use strict' ;

  angular.module('SetupApp')
  .controller('SystemsController', SystemsController);

  SystemsController.$inject = ['ConnectorsData']
  function SystemsController(ConnectorsData) {
    var vm = this;
    vm.connectors = ConnectorsData;

    vm.$onInit = () => {
      console.log('SystemsController initialized');
    }
  }
})()
