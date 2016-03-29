'use strict';

angular.module('zerumuga')
  	.controller('mountainMapCtrl', function ($scope,$stateParams,mapFilter,$ionicGesture,mountain) {

  		/* Vars */
  		$scope.filter = {
  			items : mapFilter.getItems()
  		}


  		/* Cartodb Map*/
  		//Create map
  		var coordinates = mountain.getCoordinates($stateParams.id);
  		var map = new L.map('map',{
  			center: coordinates,
  			zoom: 11
  		});

  		//Add tile
  		var basemap1 = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png');
		var basemap2 = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');

		
		// L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(map);

		//Layer vars
  		var zmgLayerUrl = 'https://igorworkoholics.cartodb.com/api/v2/viz/57ccfa22-b24d-11e5-8004-0e5db1731f59/viz.json';
  		var naturalSublayer = {};
  		var routeSublayer = {};
  		var interestSublayer = {};
  		$scope.basemap = 1;
  		map.addLayer(basemap1);

  		//Sublayers
		cartodb.createLayer(map, zmgLayerUrl)
		  .addTo(map)
		  .on('done', function(layer) {
		    naturalSublayer = layer.getSubLayer(0);
		    interestSublayer = layer.getSubLayer(2);
		    routeSublayer = layer.getSubLayer(1);
		  }).on('error', function() {
	  	});

		$scope.toggleBasemap = function(){
			if($scope.basemap === 1){
				map.removeLayer(basemap1);
				map.addLayer(basemap2);
				basemap2.bringToBack();
				$scope.basemap = 2;
			}
			else{
				map.removeLayer(basemap2);
				map.addLayer(basemap1);
				basemap1.bringToBack();
				$scope.basemap = 1;
			}
		};

		/* Functions*/

		//Toggle filter
		$scope.filter.toggle = function(){
			if($scope.filter.opened){
				$scope.filter.opened = false;
			}
			else{
				$scope.filter.opened = true;
			}
		};

		$scope.filter.apply = function(){
			var queryRoutes = mapFilter.getQueryRoutes($scope.filter.items);
			console.log(queryRoutes);
			var routesSublayerOptions = {sql:queryRoutes}
			routeSublayer.set(routesSublayerOptions);
			var queryInterest = mapFilter.getQueryInterest($scope.filter.items);
			console.log(queryInterest);
			var interestSublayerOptions = {sql:queryInterest}
			interestSublayer.set(interestSublayerOptions);
		}


		//Activate filter
		$scope.filter.switchItem = function(item){
			if(item.active){
				item.active = false;
				$scope.filter.apply();
			}
			else{
				item.active = true;
				$scope.filter.apply();
			}
		}; 


		/* Vars */
		$scope.mountain = {
			id : $stateParams.id 
		};
	});
