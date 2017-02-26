/**
* SystemsDataService fetches system related data
* getAllConnectors : GET -returns all connectors stored in DB
* getConnectorTypes: GET -returns all connector types
* saveConnector: POST -to update/add existing Connector
*/

(function () {
  'use strict';

  angular.module('SetupApp')
  .service('SystemsDataService', SystemsDataService);

  SystemsDataService.$inject = ['$http'];
  function SystemsDataService($http) {
    var service = this;
    service.getAllConnectors = getAllConnectors;
    service.getConnectorTypes = getConnectorTypes;
    service.saveConnector = saveConnector;

    function getAllConnectors() {
      var params = {
        method: 'GET',
        url: 'https://connector-demo.herokuapp.com/getAllConnectors'
      };
      return $http(params).then((result) => {
        console.log(result);
        return result.data;
      }, (error) => {
        console.error(error);
      });
    }

    function getConnectorTypes() {
      var params = {
        method: 'GET',
        url: 'https://connector-demo.herokuapp.com/getConnectorTypes'
      };
      $http(params).then((result) => {
        console.log(result);
      }, (error) => {
        console.error(error);
      });
    }

    function saveConnector(connector) {
      var params = {
        method: 'POST',
        url: 'https://connector-demo.herokuapp.com/saveConnector',
        connector: connector
      };
      $http(params).then((result) => {
        console.log(result);
      }, (error) => {
        console.error(error);
      })
    }
  }
})()
