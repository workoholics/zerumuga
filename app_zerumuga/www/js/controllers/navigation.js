'use strict';

/**
 * @ngdoc function
 * @name zerumuga.controller:navigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the zerumuga
 */
angular.module('zerumuga')
  .controller('navigationCtrl', function ($scope,menuMap,$rootScope,$ionicHistory,experience,mountain) {


  	var $menu = $('.zmg-menu'),
	$menuBackdrop = $('.zmg-menu-backdrop'),
	$mainButton = $menu.find('.main-button'),
	$otherButtons = $menu.find('a:not(.main-button)'),
	$buttonsText = $menu.find('a:not(.main-button) .text');

	$scope.zmgMenu = {
		opened : false,
		itemsLength: $otherButtons.length
	};

	$scope.zmgMenu.refresh = function(){
		$mainButton = $menu.find('.main-button'),
		$otherButtons = $menu.find('a:not(.main-button)'),
		$buttonsText = $menu.find('a:not(.main-button) .text');
		$scope.zmgMenu.opened = false;
		$scope.zmgMenu.itemsLength = $otherButtons.length;
	}	

	/* Functions */

	$scope.zmgMenu.toggle = function(){
		if(this.opened){
			this.close();
		}
		else{
			this.open();
		}
	};

	$scope.zmgMenu.open = function(){
		this.opened = true;
		var i = 0;
		while( i < this.itemsLength){
			$($otherButtons[i]).css({
				'visibility':'visible',
				'top': (i + 1) * (60) + 'px'
			});
			i++;
		}
		$menuBackdrop.fadeIn(350);
		$buttonsText.delay(350).fadeIn(350);
	};

	$scope.zmgMenu.close = function(){
		this.opened = false;
		$otherButtons.css({top:'0',visibility:'hidden'});
		$menuBackdrop.fadeOut(350);
		$buttonsText.fadeOut(350);
	};

	$scope.back = function(){
		$ionicHistory.goBack();
	};

	$scope.openLink = function(url,target,location){
	    window.open(url,target,location);
	  };


	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    	$scope.menu = menuMap[toState.name];
    	if(toState.name === 'experience'){
    		$scope.menu.items = experience.getMenuItems(toParams.id);
    	}
    	else if(toState.name === 'mountain'){
    		$scope.menu.items = mountain.getMenuItems(toParams.id);
    	}
    	$scope.zmgMenu.close();
	});

	$scope.$on('$ionicView.enter', function(event){
		$scope.zmgMenu.refresh();
	});

});
