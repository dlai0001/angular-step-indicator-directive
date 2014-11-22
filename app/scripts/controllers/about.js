'use strict';

/**
 * @ngdoc function
 * @name angularComponentsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularComponentsApp
 */
angular.module('angularComponentsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
