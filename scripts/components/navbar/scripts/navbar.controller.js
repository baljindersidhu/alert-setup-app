(function () {
  'use strict';

  angular.module('SetupApp')
  .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', '$mdSidenav']

  function NavbarController($scope, $mdSidenav) {
    var vm = this;

    vm.$onInit = function () {
      vm.headerTitle = $scope.$ctrl.headerTitle;
      vm.hasSideNav = $scope.$ctrl.hasSideNav;
      vm.sideNavTitle = $scope.$ctrl.sideNavTitle;
      vm.navID = $scope.$ctrl.navID;
      vm.sideNavItems = $scope.$ctrl.sideNavItems;
    }

  }
})()
