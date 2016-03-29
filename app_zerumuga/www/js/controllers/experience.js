'use strict';

/**
 * @ngdoc function
 * @name zerumuga.controller:experienceCtrl
 * @description
 * # experienceCtrl
 * Controller of the zerumuga
 */
angular.module('zerumuga')
  	.controller('experienceCtrl', function ($scope,experience,$stateParams) {
  		$scope.experience = experience.getExperienceData($stateParams.id);

  		/* Mountain list odd*/
  		if($scope.experience.mountainList.length % 2 !== 0){
  			$scope.mountainListClass = 'odd';
  		}

  		$scope.playAudio = function(){
  			audioElement.currentTime = 0;
  			audioElement.play();
  		};

  		var audioElement = $('audio')[0];

  		audioElement.addEventListener('timeupdate',function(ev){
	        $('.progbar .progress').css('width',Math.floor((100 * this.currentTime)/this.duration) + '%');
	    });

	    $('.progbar').on('click',function(ev){
	        var xTarget = ev.pageX - $(ev.currentTarget).offset().left;
	        var progbarWidth = $(ev.currentTarget).width();
	        var currentTime = (xTarget * audioElement.duration) / progbarWidth;
	        $('.progbar .progress').css('width',Math.floor((100 * currentTime)/ audioElement.duration) + '%');
	        audioElement.currentTime = currentTime; 
	    });

});
