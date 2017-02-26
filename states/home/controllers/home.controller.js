(function () {
  'use strict';

  angular.module('SetupApp')
  .controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;
    vm.headerTitle = 'Setup';
    vm.hasSideNav = true;
    vm.sideNavTitle = 'Manual Configuration';
    vm.sideNavID = 'settings'
    vm.sideNavItems = [
      {
        title: 'Systems',
        id: 'systems',
        view: 'home.systems'
      }
    ];
  }
})();
