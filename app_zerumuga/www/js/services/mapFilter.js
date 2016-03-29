'use strict';

angular.module('zerumuga')
.factory('mapFilter',function mapFilter()
{
	var mapFilter = {};

	var getItemsGrouped = function(items){
		var itemsGrouped = {
			routesLayer:{
				level: [],
				circular: [],
				duration: [],
				distance: []
			},
			interestLayer:[

			]
		}

		angular.forEach(items,function(item){
			if(item.layer === 3 && item.active){
				itemsGrouped.routesLayer[item.term].push(item);
			}
			else if(item.layer === 2 && item.active){
				itemsGrouped.interestLayer.push(item);
			}
		});

		return itemsGrouped;
	};

	mapFilter.getQueryRoutes = function(items){
		var group = getItemsGrouped(items);
		
		/* Layer 3 routes*/
		var queryRoutes = "SELECT * FROM ibilbideak ";
		if(group.routesLayer.level.length > 0
		   || group.routesLayer.circular.length > 0
		   || group.routesLayer.duration.length > 0
		   || group.routesLayer.distance.length > 0){
		   	queryRoutes += "WHERE ";
		   	if(group.routesLayer.level.length > 0){
		   		queryRoutes += "(";
		   		angular.forEach(group.routesLayer.level,function(filter,key){
		   			queryRoutes += filter.term + " " + filter.operator + " '" + filter.value + "' ";
		   			if(key + 1 < group.routesLayer.level.length){
		   				queryRoutes += "OR ";
		   			}
				});
				queryRoutes += ") ";
				if(group.routesLayer.circular.length > 0
				   || group.routesLayer.duration.length > 0
				   || group.routesLayer.distance.length > 0){
					queryRoutes += "AND ";
				}
		   	}
		   	if(group.routesLayer.circular.length > 0){
		   		queryRoutes += "(";
		   		angular.forEach(group.routesLayer.circular,function(filter,key){
		   			queryRoutes += filter.term + " " + filter.operator + " " + filter.value + " ";
		   			if(key + 1 < group.routesLayer.circular.length){
		   				queryRoutes += "OR ";
		   			}
				});
				queryRoutes += ")";
				if(group.routesLayer.duration.length > 0
				  || group.routesLayer.distance.length > 0){
					queryRoutes += "AND ";
				}
		   	}
		   	if(group.routesLayer.duration.length > 0){
		   		queryRoutes += "(";
		   		angular.forEach(group.routesLayer.duration,function(filter,key){
		   			queryRoutes += filter.term + " " + filter.operator + " " + filter.value + " ";
		   			if(key + 1 < group.routesLayer.duration.length){
		   				queryRoutes += "OR ";
		   			}
				});
				queryRoutes += ")";
				if(group.routesLayer.distance.length > 0){
					queryRoutes += "AND ";
				}
		   	}
		   	if(group.routesLayer.distance.length > 0){
		   		queryRoutes += "(";
		   		angular.forEach(group.routesLayer.distance,function(filter,key){
		   			queryRoutes += filter.term + " " + filter.operator + " " + filter.value + " ";
		   			if(key + 1 < group.routesLayer.distance.length){
		   				queryRoutes += "OR ";
		   			}
				});
				queryRoutes += ")";
		   	}
		}
		else{
			queryRoutes += "LIMIT 0";
		}
		

		return queryRoutes;
	};

	mapFilter.getQueryInterest = function(items){
		var group = getItemsGrouped(items);
		/* Layer 2 interest*/
		var queryInterest = "SELECT * FROM interes_guneak ";
		queryInterest += "WHERE ";
		if(group.interestLayer.length > 0){
			angular.forEach(group.interestLayer,function(filter,key){
				queryInterest += filter.term + " " + filter.operator + " '" + filter.value + "' ";
	   			queryInterest += "OR ";
			});
		}
		queryInterest += " type = 'peak' OR type = 'sec-peak' OR type = 'lake'";
		return queryInterest;
		
	};

	mapFilter.getItems = function(){
		var items = [
			{
				id:'easy',
				text: 'Erraza',
				term:'level',
				value: 'easy',
				operator: '=',
				icon: 'zmgicon-ruta-facil',
				active: true,
				layer: 3
			},
			{
				id:'medium',
				text: 'Erdi mailakoa',
				term:'level',
				value: 'medium',
				operator: '=',
				icon: 'zmgicon-ruta-moderada',
				active: true,
				layer: 3
			},
			{
				id:'dificult',
				text: 'Zaila',
				term:'level',
				value: 'dificult',
				operator: '=',
				icon: 'zmgicon-ruta-dificil',
				active: true,
				layer: 3
			},
			{
				id:'circular',
				text: 'Zirkularra',
				term:'circular',
				value: true,
				operator: '=',
				icon: 'zmgicon-ruta-circular',
				active: true,
				layer: 3
			},
			{
				id:'lower5h',
				text: '< 5h',
				term:'duration',
				value: 5,
				operator: '<=',
				icon: 'zmgicon-tiempo',
				active: true,
				layer: 3
			},
			{
				id:'upper5h',
				text: '> 5h',
				term:'duration',
				value: 5,
				operator: '>',
				icon: 'zmgicon-tiempo',
				active: true,
				layer: 3
			},
			{
				id:'lower10km',
				text: '< 10km',
				term:'distance',
				value: 10,
				operator: '<=',
				icon: 'zmgicon-distancia',
				active: true,
				layer: 3
			},
			{
				id:'upper10km',
				text: '> 10km',
				term:'distance',
				value: 10,
				operator: '>',
				icon: 'zmgicon-distancia',
				active: true,
				layer: 3
			},
			{
				id:'parking',
				text: 'Aparkalekua',
				term:'type',
				value: 'parking',
				operator: '=',
				icon: 'zmgicon-parking',
				active: true,
				layer: 2
			},
			{
				id:'refuge',
				text: 'Aterpetxea',
				term:'type',
				value: 'refuge',
				operator: '=',
				icon: 'zmgicon-refugio',
				active: true,
				layer: 2
			},
			{
				id:'recreative',
				text: 'Piknik-gunea',
				term:'type',
				value: 'recreative',
				operator: '=',
				icon: 'zmgicon-merendero',
				active: true,
				layer: 2
			},
			{
				id:'fountain',
				text: 'Iturria',
				term:'type',
				value: 'fountain',
				operator: '=',
				icon: 'zmgicon-fuente',
				active: true,
				layer: 2
			}
			
		];
		return items;
	};


	return mapFilter;
});