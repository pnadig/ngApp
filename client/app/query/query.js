'use strict';

angular.module('ngAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('query', {
        url: '/query',
        templateUrl: 'app/query/query.html',
        controller: 'QueryCtrl'
      });
  });