'use strict';

angular.module('booxApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/books', {
        templateUrl: 'app/bookRoute/bookRoute.html',
        controller: 'bookCtrl'
      })
      .when('/book/:id', {
      	templateUrl: 'app/bookRoute/bookDetail.html',
      	controller: 'bookCtrl'
      })
      .when('/bookEdit/:id', {
        templateUrl: 'app/bookRoute/bookDetail.html',
        controller: 'bookCtrl'
      });
  });
