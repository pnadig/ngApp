'use strict';

angular.module('ngAppApp')
  .controller('QueryCtrl', function ($scope, $http, socket) {
    $scope.testResponse = {"test":"test"};
    $scope.namequery = [];
    $scope.inputquery = '';

    $scope.callQuery = function()
    {
      $http.post('http://localhost:8047/query.json', {query:'SELECT * FROM cp.`employee.json` LIMIT 20', queryType:'SQL'}).
      success(function(data, status, headers, config) {

        $scope.namequery = data;
        console.log("SUCCESS\n");
        console.log(data);
      // this callback will be called asynchronously
      // when the response is available

      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }

    $scope.callQuery2 = function()
    {
      var message = $scope.inputquery;
      $http.post('http://localhost:8047/query.json', {query:message, queryType:'SQL'}).
      success(function(data, status, headers, config) {

        $scope.namequery = JSON.stringify(data);
        console.log("SUCCESS\n");
        console.log(data);
      // this callback will be called asynchronously
      // when the response is available

      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }


  });