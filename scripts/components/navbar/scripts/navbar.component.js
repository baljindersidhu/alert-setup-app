(function functionName() {
  'use strict';

  /**
  * nav-bar component
  * Loads header nav-bar with optional side-nav
  * bindings:
  * headerTitle - Title of nav-bar (string)
  * hasSideNav - if side-nav view is enabled/disabled (boolean)
  * sideNavTitle - Title of side-nav
  * sideNavItems - Items to show in side-nav
  */

  angular.module('SetupApp')
  .component('navBar', {
    bindings: {
      headerTitle: '@',
      hasSideNav: '<',
      sideNavTitle: '@',
      navID: '@sideNavId',
      sideNavItems: '<'
    },
    templateUrl: 'scripts/components/navbar/templates/navbar.component.html'
  });

})()
