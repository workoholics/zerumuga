'use strict';

/**
 * @ngdoc service
 * @name zerumuga.menuprovider
 * @description
 * # menuMap provider
 * Constant in the zerumuga.
 */

angular.module('zerumuga')
.service('menuMap',function menuMap()
{
	return {
		home:{
			backButton: false,
			icon: 'zmgicon-rosa-vientos',
			items:[
				{
					name:'Zerumugari buruz',
					icon: 'zmgicon-sobre-zerumuga',
					link: '#/about'
				},
				{
					name: 'Kredituak',
					icon: 'zmgicon-workoholics',
					link: '#/credits'
				}
			]
		},
		about:{
			backButton: true
		},
		credits:{
			backButton: true
		},
		experience:{
			backButton: true,
		},
		mountain:{
			backButtonItem: true,
			backButton: false,
			icon: 'zmgicon-rosa-vientos'
		},
		mountainMap:{
			backButton: true,
		}
	};
});