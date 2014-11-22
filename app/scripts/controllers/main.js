'use strict';

/**
 * @ngdoc function
 * @name angularComponentsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularComponentsApp
 */
angular.module('angularComponentsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
