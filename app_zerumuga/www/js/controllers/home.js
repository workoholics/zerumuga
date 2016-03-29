'use strict';

/**
 * @ngdoc function
 * @name zerumuga.controller:homeCtrl
 * @description
 * # HomeCtrl
 * Controller of the zerumuga
 */
angular.module('zerumuga')
  .controller('homeCtrl', function ($scope,experience) {
  	$scope.experiences = experience.getList();
  });
