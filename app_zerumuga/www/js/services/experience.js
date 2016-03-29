'use strict';

angular.module('zerumuga')
.factory('experience',function experience()
{
	var experience = {};

	/* Get data of experience by id*/
	experience.getExperienceData = function(id){
		var experienceData = undefined;
		switch (id){
			case 'deiadar-mendiak':{
				experienceData = {
					title: 'Deiadar mendiak',
					description: '<p>Deiadar mendiak esaten zaie garai batean Gernikako Batzar Nagusietarako deia egiten zen bost mendiei; soinuen eta argien bidez ematen zen Batzar Nagusien berri.</p><p>Adarra erabiliaz oharra ematen zuen lehenengo mendia Gorbeia zen eta jarraian beste mendiek erantzuten zuten beren gailurretatik; mendi horiek lurralde historiko osotik ikus zitezkeen eta mendi bakoitza Bizkaiko Jaurerriko merindade batekoa zen. Inguruetako herrietan herritarren parte hartzerako deia entzuten zutenean, bazekiten hurrengo ilargi-aldaketan Batzar Nagusiak izango zirela.</p>',
					bg:'http://assets.zerumuga.eus/images/deiadar_mendiak/bg_montes_bocineros_location.png',
					mountainListDescription: '<h2>Mendiak</h2><p>Lurraldean zehar estrategikoki banatutako mendiak hauek ziren:</p>',
					mountainList: [
						{id:'gorbeia',name:'Gorbeia',shortDescription:'Arratia-Nerbioin dago, Arabarekin mugan.',height:1482,profile:'gorbea_profile.jpg',color: 'green-fluor',link360:'http://360.io/KqWTnK'},
						{id:'kolitza',name:'Kolitza',shortDescription:'Enkarterrin dago.',height:897,profile:'kolitza_profile.jpg',color:'pink',link360:'http://360.io/KqWTnK'},
						{id:'ganekogorta',name:'Ganekogorta',shortDescription:'Bilbo gainean dago.',height:999,profile:'ganekogorta_profile.jpg',color: 'dark-green',link360:'http://360.io/KqWTnK'},
						{id:'oiz',name:'Oiz',shortDescription:'Durangaldearen, Lea-Artibairen eta Urdaibairen gainean dago.',height:1026,profile:'oiz_profile.jpg',color: 'green',link360:'http://360.io/KqWTnK'},
						{id:'sollube',name:'Sollube',shortDescription:'Bermeo, Urdaibai eta Txorierri gainean dago.',height:684,profile:'sollube_profile.jpg',color:'yellow',link360:'http://360.io/KqWTnK'}
					],
					longDescription: '<h2>Tradizioaren jatorria</h2><p>Tradizio honen jatorriaren berri izateko, Erdi Aroraino joan beharra daukagu; Batzar Nagusiak Gernikako Juntetxean egiten baitziren orduan. Bizkaiko euskal lurralde historikoko arauzko boterea zuen batzar honek eta zeregin legegilea zuen batez ere; legeak ohituretan oinarritzen ziren.</p><p>Garai hartako bizimoduaren ondorioz (herriak sakabanatuta zeuden), deiadar mendiak sortu ziren; oharrak emateko metodo eraginkorra zen, horrela herritarrek beti jakingo baitzuten Batzar Nagusiak noiz hasiko ziren.</p><p>Ohitura hau desagertuz joan zen eta horren ordez Batzar Nagusien deialdia ermitetako kanpaien bidez egiten hasi ziren. Geroago, herritarrak ordezkatzeko prokuradoreak hautatu eta deialdiak testu idatzien bidez eginda, komunikatzeko modu hori ere galduz joan zen pixkanaka eta XVII. mendean deiadar mendien sistema ordezkatu eta betirako galdu zen.</p><p>2004. urtean, Bizkaiko Batzar Nagusiak berrezarri izanaren 25. urtemugan, bost deiadar mendietatik oharra zabaltzeko ohitura berreskuratu zen. Txandaka, urtero berreskuratzen da ohitura eta gailurren batean "Deiadar mendien eguna" deiturikoa ospatzen; egun horretan mendizaleak eta, oro har, euskal ohituren zalean biltzen dira.</p>',
					images:[
						{url:'http://assets.zerumuga.eus/images/deiadar_mendiak/slider/slide1.jpg'},
						{url:'http://assets.zerumuga.eus/images/deiadar_mendiak/slider/slide2.jpg'},
						{url:'http://assets.zerumuga.eus/images/deiadar_mendiak/slider/slide3.jpg'},
						{url:'http://assets.zerumuga.eus/images/deiadar_mendiak/slider/slide4.jpg'},
						{url:'http://assets.zerumuga.eus/images/deiadar_mendiak/slider/slide5.jpg'}
					]
				}; 
			}
			break; 
		};	
		return experienceData;
	};

	experience.getList = function(){
		return [
			{id: 'deiadar-mendiak',url:'#/experience/deiadar-mendiak',name: 'Deiadar mendiak',icon: 'ion ion-beer',bg:'bg_montes_bocineros.png',available: true,visible:true},
			{id: 'infernuko-diagonala',url:'#/',name: 'Infernuko diagonala',icon: 'ion ion-beer',bg:'bg_proximamente.png',available: false,visible:true},
			{id: 'hiru-haundiak',url:'#/',name: 'Hiru haundiak',icon: 'ion ion-beer',bg:'bg_proximamente.png',available: false,visible:true}
		]
	};

	experience.getMenuItems = function(id){
		// var menuItems = []
		// var experiences = this.getList();
		// angular.forEach(experiences,function(experience){
		// 	if(experience.id !== id){
		// 		var exp = {
		// 			id : experience.id,
		// 			name : experience.name,
		// 			icon : experience.icon,
		// 			link: '#/experience/' + experience.id
		// 		};
		// 		menuItems.push(exp);
		// 	}
		// });
		// return menuItems;
	};



	return experience;
});