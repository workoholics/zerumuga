'use strict';

angular.module('zerumuga')
  	.controller('mountainCtrl', function ($scope,$stateParams,mountain,$location,$timeout) {
		$scope.mountain = mountain.getById($stateParams.id);
		$('.mountain-screen').css({width:window.innerWidth + 'px'});

		$scope.infoTabs = {
			active: 'situation'
		};

		$scope.loading = true;

		$scope.infoTabs.select = function(tab){	
			$scope.infoTabs.active = tab;
		};

		$scope.goTo = function(url){
			$location.path(url);
		};


		$scope.$on('$ionicView.loaded', function () {
			$timeout(function(){
				$('.mountain-screen').css({width:'100%'});
			},2000);
		});


	});