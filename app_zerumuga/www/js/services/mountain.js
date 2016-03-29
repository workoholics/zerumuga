'use strict';

angular.module('zerumuga')
.factory('mountain',function mountain()
{
	var mountain = {};

	mountain.getMenuItems = function(id){
		var menuItems = []
		var mountains = this.getList();
		angular.forEach(mountains,function(mountain){
			if(mountain.id !== id){
				var mount = {
					id : mountain.id,
					name : mountain.name,
					icon : mountain.icon,
					color: mountain.color,
					link: '#/mountain/' + mountain.id
				};
				menuItems.push(mount);
			}
		});
		return menuItems;
	};

	mountain.getCoordinates = function(id){
		var coordinates = null;
		switch(id){
			case 'gorbeia':{
				coordinates = [43.0338,-2.7814];
			}
			break;
			case 'ganekogorta':{
				coordinates = [43.20229201,-2.97955871];
			}
			break;
			case 'kolitza':{
				coordinates = [43.20081583,-3.25049937];
			}
			break;
			case 'sollube':{
				coordinates = [43.37118586,-2.76386619];
			}
			break;
			case 'oiz':{
				coordinates = [43.22758572,-2.59132102];
			}
			break;
		}
		return coordinates;
	}


	mountain.getList = function(experience){
		return [
			{id:'gorbeia',name:'Gorbeia',icon: 'zmgicon-pico',color:'green-fluor'},
			{id:'ganekogorta',name:'Ganekogorta',icon: 'zmgicon-pico',color:'dark-green'},
			{id:'kolitza',name:'Kolitza',icon: 'zmgicon-pico',color:'pink'},
			{id:'sollube',name:'Sollube',icon: 'zmgicon-pico',color:'yellow'},
			{id:'oiz',name:'Oiz',icon: 'zmgicon-pico',color:'green'}
		];
	};

	mountain.getById= function(mountainId){
		var data = {};
		switch (mountainId){
			case 'gorbeia': {
				data = {
					id : 'gorbeia',
					title :'Gorbeia',
					altitude : '1.482m',
					shortDescription : '<p>Gorbeia mendia Araba eta Bizkaia artean dago eta <strong>bost deiadar mendietako bat da;</strong> Arratia-Nerbioi eta Arabako muga hartzen ditu mendi honek, eremu estrategikoan dago. Hemendik egiten zen Batzar Nagusietarako deialdia; horretarako, sua egin zen eta adarra jotzen zen.</p><p>1.482 metro ditu eta bere gailurrean metalezko gurutze bat dago 1899az geroztik; gurutze horrek bertsio desberdinak izan dituen arren. Gaur egungoa 17,23 metro da altuan eta erreferentziazko ikur bihurtu da. Gorbeia euskal mendizaleen erreferentziazko puntua da eta <strong>Gorbeiako Parke Naturalaren</strong> bihotza ere bai.</p>',
					prominence: '867m',
					coordinates:'43°02’06"N 2°46’48"W',
					information:{
						situation:{
							title: 'Kokapena',
							text: '<p><strong>Araba eta Bizkaia arteko mugan</strong> dago, Zuia (Araba) eta Zeanuri (Bizkaia) udalerrietan. Isurialde guztietatik igo daiteke eta inguru natural bikainez inguratuta dago. </p>'
						},
						geology:{
							title: 'Geologia',
							text: 'Gorbeia mendian bi substratu mota daude; batetik silizea daukagu eta honek tonu iluneko paisaia biribilak eratzen ditu, landaredi handikoak, bere gailurrean ikus daitekeenez. Bestetik <strong>kareharrizko amildegiak</strong> dauzkagu; tonu argia izaten dute eta azalean haitza izaten da nagusi.'
						},
						flora:{
							title: 'Flora', 
							text: '<p>Landarediari dagokionez, <strong>baso hosto-erorkor</strong> garrantzitsuak ditu, batez ere Arabako isurialdean (Altube inguruan). Azalerarik gehien hartzen duen zuhaitza <strong>pagoa</strong> da, 5.500 h inguru hartzen baitu; <strong>haritz kandugabeak eta kandudunak</strong> ere badaude, <strong>artadi kantauriarrak eta gurbiztiak</strong> ere bai, duela zenbait mende klima askoz epelagoa izan zenaren lekuko.</p><p>Gorbeiako Parke Naturalean <strong>haltzek, sahatsek, lizarrek eta makalek</strong> ibai ertzeko gero eta baso urriagoak <strong>eratzen dituzte</strong>, eta interes handiko espezieen babeslekuak dira. Koniferoek, batez ere baso-ustiaketarako landatutako espezie aloktonoek, hartzen dute Parkearen azaleraren zati handi bat, eta espezierik adierazgarrienak <strong>intsinis pinua (Pinus radiata), Lawson altzifrea eta mendi-pinua (Pinus nigra) dira.</strong></p>',
							slider:{
								current: 0,
								position: 0,
								slides:[
									{url: 'http://assets.zerumuga.eus/images/gorbeia/flora/slide1.jpg'},
									{url: 'http://assets.zerumuga.eus/images/gorbeia/flora/slide2.jpg'},
									{url: 'http://assets.zerumuga.eus/images/gorbeia/flora/slide3.jpg'},
									{url: 'http://assets.zerumuga.eus/images/gorbeia/flora/slide4.jpg'},
									{url: 'http://assets.zerumuga.eus/images/gorbeia/flora/slide5.jpg'}
								] 
							}
						},
						fauna:{
							title: 'Fauna',
							text: '<p><strong>Fauna-espezie ugari dago: basoko harrapariak (aztorea, gabiraia, arrano sugezalea) eta harkaitzetakoak (belatz handia, sai zuria), ugaztunak (basakatua, oreina, ipurtatsa, lepazuria, muxar grisa edo lepahoria)</strong>. Putzu eta hezeguneetan <strong>anfibio</strong> ugari dago <strong>(gailurretako uhandrea eta baso-igel jauzkaria)</strong> Sarraskijaleei dagokienez, <strong>sai arrearen</strong> lurraldearen zatia da parkea, baina ez du habiarik egiten bertan, Urkiolako Parke Naturaletik eta Gorobeletik eta Valderejokotik etortzen da.</p>',
							slider:{
								current: 0,
								position: 0,
								slides:[
									{url: 'http://assets.zerumuga.eus/images/gorbeia/fauna/1.jpg'},
									{url: 'http://assets.zerumuga.eus/images/gorbeia/fauna/2.jpg'},
									{url: 'http://assets.zerumuga.eus/images/gorbeia/fauna/3.jpg'},
									{url: 'http://assets.zerumuga.eus/images/gorbeia/fauna/4.jpg'},
									{url: 'http://assets.zerumuga.eus/images/gorbeia/fauna/5.jpg'},
									{url: 'http://assets.zerumuga.eus/images/gorbeia/fauna/6.jpg'},
									{url: 'http://assets.zerumuga.eus/images/gorbeia/fauna/7.jpg'}
								] 
							}
						},
						weather:{
							title: 'Klima',
							text: '<p>Gorbeiako Parke Naturalaren garaiera dela eta, mendiko ohiko klima du. Bizkaiko golkotik datozen haize hezeak geratzen dituen hesi handia da, horren ondorioz, alde handiak daude iparraldeko isuriaren (hezeagoa) eta hegoaldekoaren (lehorragoa eta eguzkitsuagoa) artean. Prezipitazio ugari izaten da, eta urteko hilabete guztietan izaten diren arren, udazkenean eta neguan euri gehiago egiten du. Urteko batez besteko tenperatura 12ºC da Bizkaiko ibarretan eta 8ºC ingurukoa gunerik altuenetan. Azken gune hauetako prezipitazioei dagokienez, neguko hilabeteetan elurra egiten du eta udaberrira arte irauten du elur horrek.</p><p>Bizkaiko eta Arabako aldean prezipitazio eta tenperatura alorrean dauden aldeak nabarmenak dira florako edo geologiako alderdi batzuetan ere. Fohem efektuaren eraginez, euri gehiago izaten da mendigunearen iparraldean eta klima kontinentalaren eragina du hegoaldeak.</p>'
						}
					},
					textImageBlock:{
						title : 'Gorbeiako Parke Naturala',
						text : '<p>Gorbeiako Parke Naturala babestutako gune bat da eta Araba eta Bizkaiaren artean dago; Areatza, Artea, Orozko, Zeanuri eta Zeberioko udalerriak hartzen ditu Bizkaian eta Zigoitia, Zuia eta Urkabustaiz Araban. 1994ko ekainaren 21eko Eusko Jaurlaritzako Dekretu bidez izendatu zen Parke Natural bertako natura-ondarea babesteko, landa-garapena sustatzeko eta inguru hau gehiago ezagutarazteko. 20.016 ha ditu eta Euskal Herriko parke naturalik handiena izateaz gain, hemendik gertu dagoen Urkiolakoarekin batera ingurumen unitate garrantzitsua eratzen du. </p>',
						slider:{
							current: 0,
							position: 0,
							slides:[
								{url: 'http://assets.zerumuga.eus/images/gorbeia/parke_naturala/slide1.jpg'},
								{url: 'http://assets.zerumuga.eus/images/gorbeia/parke_naturala/slide2.jpg'},
								{url: 'http://assets.zerumuga.eus/images/gorbeia/parke_naturala/slide3.jpg'},
								{url: 'http://assets.zerumuga.eus/images/gorbeia/parke_naturala/slide4.jpg'},
								{url: 'http://assets.zerumuga.eus/images/gorbeia/parke_naturala/slide5.jpg'},
							] 
						}
					},
					img360:{
						bg : 'http://assets.zerumuga.eus/images/gorbeia/banner_360_gorbeia.png',
						link: 'http://360.io/KqWTnK'
					},
					routes:{
						title : 'Ibilbideak',
						text : '<p>Igotzeko erraza denez, euskal mendizaleen artean oso ezaguna da eta isurialde guztietatik igotzen dira tontorrera. Ohikoa da urteko azkenengo eta lehenengo egunean Gorbeiara igotzea; ehunka lagun elkartzen dira tontorrean cava edo sagardoarekin gurutzean topa eginaz. Tontorrera igotzeko ibilbide ugari dago.</p>',
						list:[
							{
								title: 'Pagomakurretik',
								thumb: 'http://assets.zerumuga.eus/images/gorbeia/route/pagomakurre/thumb.jpg',
								level: 'easy',
								duration: '5 ordu 47 minutu',
								distance: '12,67km'
							},
							{
								title: 'Ubidetik (Murua)',
								thumb: 'http://assets.zerumuga.eus/images/gorbeia/route/embalses/thumb.jpg',
								level: 'medium',
								duration: '6 ordu',
								distance: '17,82km'
							},
							{
								title: 'Zaratetik',
								thumb: 'http://assets.zerumuga.eus/images/gorbeia/route/zarate/thumb.jpg',
								level: 'easy',
								duration: '6 ordu 58 minutu',
								distance: '18,71'
							}
						]
					}
				};
			};
			break;
			case 'kolitza': {
				data = {
					id: 'kolitza',
					title :'Kolitza',
					altitude : '897m',
					prominence: '54m',
					coordinates:'43°12′07″N 3°14′58″W',
					shortDescription : '<p>Kolitza Ordunteko mendietako bat da eta 897 metro ditu. Balmasedan dago, Bizkaian.</p><p>Kolitzako sakanaren gainean dago bere gailur zorrotz eta berezia; Traslaviñan hasten da. Bertan dago San Sebastian eta San Rokeren ermita ere,  XIII. edo XIV. mendekoa, eta estilo protogotikoa dela uste da, nahiz eta Mena ibarreko ermita erromanikoen estiloa mantendu. Bi santu hauen irudiez gain, Begoñako ama birjinarena ere badago, Bizkaiko zaindaria, Pilarekoarena eta Sortzez Garbiarena egoteaz gain.</p><p>Kolitza deiadar mendietako bat da Oiz, Sollube, Gorbeia eta Ganekogortarekin batera. Horrek esan nahi du gailurrean adarra jotzen zela eta sua egiten zela, Gernikako Batzar Nagusietako Enkarterriko ordezkariei deitzeko.</p><p>Gaur egun Kolitza erreferentziazko tokia da Balmaseda eta San Pelaio arteko Ordunteko mendietan ibiltzen diren mendizaleentzat.  Hirurogeiko hamarkadaz geroztik, mendiko</p>',
					img360:{
						bg : 'http://assets.zerumuga.eus/images/kolitza/banner_360_kolitza.png',
						link: 'http://360.io/KqWTnK'
					},
					textImageBlock:{
						title: 'Historia',
						text: '<p>Gailurrean dagoen ermita Gerra Zibilean suntsitu egin zuten, 1937an, mendi honetan izan zen borrokan (Kolitzako borroka), baina konpondu eta berriro inauguratu zuten 1949an. Gailurra eta Alto Terreros (907 m) banatzen dituen lepoan elurzulo bat dago eta garai batean neguko elurra pilatzeko erabiltzen zen. Hori dela eta, muino horri La Nevera (820 m) esaten zaio.</p><p>Ermitak adbokazio bikoitza du, hasieran San Sebastianena baino ez zen arren. Bigarren adbokazioa XIV. mendeko izurriteen ondorioz jarri zen. Izan ere, san Roke Montpellierren jaio omen zen (tradizioak hala dio) eta bere bizitzaren zati batean izurria zutenak zaintzen aritu zen.</p>',
						slider:{
							slides:[
								{url: 'http://assets.zerumuga.eus/images/kolitza/slider/slide2.jpg'},
								{url: 'http://assets.zerumuga.eus/images/kolitza/slider/slide3.jpg'},
								{url: 'http://assets.zerumuga.eus/images/kolitza/slider/slide4.jpg'},
								{url: 'http://assets.zerumuga.eus/images/kolitza/slider/slide5.jpg'},
								{url: 'http://assets.zerumuga.eus/images/kolitza/slider/slide1.jpg'},
							] 
						}
					},
					routes:{
						title : 'Ibilbideak',
						text : '<p>Ezagutu mendi honen ibilbide garrantzitsuenak.</p>',
						list:[
							{
								title: 'Pandozalesetik',
								thumb: 'http://assets.zerumuga.eus/images/kolitza/slider/slide1.jpg',
								level: 'easy',
								duration: '3 ordu 31 minutu',
								distance: '10,8km'
							}
						]
					}
				}
			}
			break;
			case 'ganekogorta': {
				data = {
					id: 'ganekogorta',
					title: 'Ganekogorta',
					altitude: '997m',
					prominence: '708m',
					coordinates: '43°12′12″N 2°58′41″W',
					shortDescription: '<p>Bilbo hegoaldean dago bizkaitar mendi hau eta 997 metroko garaiera du.</p><p>Ganekogorta da Bilbo hegoaldeko mendi-sistemako gailurrik altuena eta Alonsotegiko udal-mugartean dago. Bilbo eta Ganekogorta artean Ganeta dago, 687 m, eta bilbotar mendizaleak sarri joaten dira bertara. Gailur nagusia gailur-lerro batek eratzen du; iparraldean arraseko landaredia du eta malda handia Alonsotegira arte; hegoaldean, aldiz, Okondo eta Zollo ibarretan amaitzen den sakan harritsua du.</p><p>Gailur-lerroan ongi bereizitako hiru gailur daude: ekialdean Biderdi, 871 m, erdian 997 metroko gailurra eta mendebaldean Galarraga, 901 m. Arabako muga gailur nagusiko erpin geodesikotik 10 m ingurura dago.</p>',
					img360:{
						bg : 'http://assets.zerumuga.eus/images/ganekogorta/banner_360_ganekogorta.png',
						link: 'http://360.io/KqWTnK'
					},
					textImageBlock:{
						title: 'Historia',
						text: '<p>Mendi honetan jaio zen euskal mendizaletasuna, Bizkaiko lehenengo mendizale elkartea 1870ekoa da eta "ganekogortos" deitzen zen. Mendiaren izenak, Ganekogortak, goiko korta edo ukuilua esan nahi du.</p><p>Erpin geodesikoa 1967an jarri zen eta bere ondoan orientaziorako mahai bat dago 2005az geroztik. XXI. mendearen hasieran parke eoliko bat proiektatu zen Ganekogortan, inguru horietan hain ohikoak diren haize bolada handiak aprobetxatzeko, baina gaur egun proiektu hori etenda dago.</p>',
						slider:{
							slides:[
								{url: 'http://assets.zerumuga.eus/images/ganekogorta/slider/slide2.jpg'},
								{url: 'http://assets.zerumuga.eus/images/ganekogorta/slider/slide3.jpg'},
								{url: 'http://assets.zerumuga.eus/images/ganekogorta/slider/slide4.jpg'},
								{url: 'http://assets.zerumuga.eus/images/ganekogorta/slider/slide5.jpg'},
								{url: 'http://assets.zerumuga.eus/images/ganekogorta/slider/slide1.jpg'},
							] 
						}
					},
					routes:{
						title : 'Ibilbideak',
						text : '<p>Ezagutu mendi honen ibilbide garrantzitsuenak.</p>',
						list:[
							{
								title: 'Pagasarriko parkinetik',
								thumb: 'http://assets.zerumuga.eus/images/ganekogorta/pagasarri.jpg',
								level: 'medium',
								duration: '3 ordu 33 minutu',
								distance: '11,3km'
							},
							{
								title: 'Laudiotik',
								thumb: 'http://assets.zerumuga.eus/images/ganekogorta/laudio.jpg',
								level: 'medium',
								duration: '5 ordu 37 minutu',
								distance: '17,4km'
							},
							{
								title: 'Arraiz - Ganekogorta - Sodupe',
								thumb: 'http://assets.zerumuga.eus/images/ganekogorta/sodupe.jpg',
								level: 'dificult',
								duration: '8 horas 47 minutos',
								distance: '21.03km'
							}
						]
					}
				};
			}
			break;
			case 'sollube':{
				data = {
					id: 'sollube',
					title: 'Sollube',
					altitude: '683m',
					prominence: '511m',
					coordinates: '43°22′19″N 2°45′45″W',
					shortDescription: '<p>Sollubek 683,80 metro ditu eta euskal mendietako bat da. Bermeon dago, Mundakako ibaiadarraren ezkerraldean eta Urdaibaiko Biosfera Erreserbaren mugetako bat da. Bermeo, Meñaka, Arrieta eta Busturia udalerrietan ditu bere lurrak. Gailurra Arrietan dago.</p><p>Bere kokapen geografiko estrategikoaren eta garaieraren ondorioz (itsasertzetik gertu egon arren, nahiko garaia da), telekomunikazioen zentro garrantzitsua da eta bere gailurra telefonia, irrati eta telebistako antenaz josita dago.</p><p>Bere gailurrean lehen mailako bi erpin geodesiko daude.</p>',
					img360:{
						bg : 'http://assets.zerumuga.eus/images/sollube/banner_360_sollube.png',
						link: 'http://360.io/KqWTnK'
					},
					textImageBlock:{
						title: 'Historia',
						text: '<p>Espainiako Gerra Zibilean Sollubeko gudua izan zen; italiar tropek Errepublikako legezko gobernuaren aurkakoak babesten zituzten eta errepublikar defentsekin aritu ziren borrokan; baja ugari egon zen. Gudu honetan Errepublikaren aldeko asko hil zen eta Bizkaia armaz hartu zeneko borrokarik handienetakoa izan zen. 10 egun iraun zuen eta mila lagun baino gehiago hil ziren; faszisten esku geratu ziren 1937ko maiatzaren 8an.</p>'
					},
					routes:{
						title : 'Ibilbideak',
						text : '<p>Ezagutu mendi honen ibilbide garrantzitsuenak.</p>',
						list:[
							{
								title: 'Mañu - Sollube - Mundaka',
								thumb: 'http://assets.zerumuga.eus/images/sollube/sollube.jpg',
								level: 'easy',
								duration: '7 ordu 5 minutu',
								distance: '20,25km'
							}
						]
					}

				};
			}
			break;
			case 'oiz':{
				data = {
					id: 'oiz',
					title: 'Oiz',
					altitude: '1026m',
					prominence: '710m',
					coordinates: '43°13′43″N 2°35′24″W',
					shortDescription: '<p>Oiz Bizkaiko Lurralde Historikoko gailurrik mitikoenetakoa da. Bera eta Zengotitaganekoa gailur-lerro luze batean daude eta hauetako urak hainbat ubidetara doaz: Ibaizabal, Artibai, Lea, Oka eta Debara, besteak beste, denak ere isurialde kantauriarrekoak.</p><p>Oiz mendiaren profila erraz ezagutzen da urrunetik ere, profil hori are nabarmenagoa baita bere gailurrean dauden komunikazio-dorre garaien ondorioz eta gailur osoan dauden haize-erroten ondorioz.</p><p>Oiz Bizkaiaren erdian dagoenez, oso urrunetik ere ikus daiteke. Horregatik da Bizkaiko deiadar mendietako bat. Sua pizten zen bere gailurrean Batzar Nagusien berri emateko.</p><p>Gailur horretan bertan lehen mailako erpin geodesiko bat ere bada.</p>',
					img360:{
						bg : 'http://assets.zerumuga.eus/images/oiz/banner_360_oiz.png',
						link: 'http://360.io/KqWTnK'
					},
					information:{
						flora:{
							title: 'Flora',
							text: '<p>Oizek <strong>hostozabalen orban ugari eta baso mistoak</strong> ditu oraindik ere, batez ere N, E eta SW mazeletan. Goiko eremuetan ez dago inolako basorik eta larrerako erabiltzen dira.</p>'
						},
						geology:{
							active: true,
							title: 'Geologia',
							text: '<p><strong>Gorostiondo</strong> bakan batzuk daude eta <strong>txilarrea eta otea</strong>, ere bai; batzuetan lurpeko harearria ageri da Durangaldeko mendietako <strong>kareharriekin</strong> kontrastean.</p><p>Iberiar penintsulako mendi gutxik dituzte Oizek bezalako ezaugarri geologiko ikusgarriak. Oro har, Pirinioetako gailur harritsu guztiak eta Euskal Herrian-Kantabrian eta Europako mendietan dituzten luzapenak Era Primarioko (Paleozoikoa) eta Sekundarioko (Mesozoikoa) geologia sedimentariokoak dira. Baina Oiz salbuespena da, Era Tertziarioko (Zenozoikoa) banakotasun bat. Petrografikoki hareharriz eta buztin paleozenaikoz eratuta dago; eta harkaitz hauek Anboto eta inguruetako gailurretako kareharriak baino ahulagoak diren arren, harrilarien trebeziak erakusteko balio izan dute mendeetan zehar; euskaldun hauek adituak ziren harria lantzen eta horren isla ditugu Durangaldeko baserrietan harlanduarekin egindako arkuak eta lanak.</p><p>Oizen mendi-lerrokadura (bizkaitar sinklinorioa) Abrako Galeatik Ermuraino doa eta Anbotoko lerrokaduraren (bizkaitar antiklinorioa) paraleloan dago; bigarren lerrokadura hau Luzero lurmuturrean hasten da eta Aizkorriraino (Gipuzkoa) doa. "Partekatutako" espazioa dute eta Kantauri kostaldetik duten egitura paraleloen orografia horrek inspiratu ditu naturalista euskaldunak eta antzinateko artzainak; hortik dator Bizkaiaren izena (Bi-aitz-kaia) ere, hau da, bi haitz lerro.</p>'
						},
						fauna:{
							title: 'Fauna',
							text: '<p>Oizko goiko eremuetan basorik ez dagoenez, <strong>artaldeak, zaldiak eta behiak</strong> ikus ditzakegu larrean. Fauna basatia eta nabarmena da; ugaztun espezie ugari dago, batez ere basurdeak eta orkatzak. Hegaztiei dagokienez, hemendik gertu dagoen Urkiolako Parke Naturalarekin partekatzen dute habitata.</p>'
						}
					},
					textImageBlock:{
						title: 'Historia',
						text: '<p>Oizko gailur-lerroa da Bizkaiko eta Euskal Herriko historiako tokirik enblematikoenetako bat. Historiaurrean artzaintzan ibiltzen zirenak bizi ziren bertan, eta beraien aztarnak utzi dituzte historiaurreko monumentuetan.</p><p>Zoritxarren alorrean ere Oiz aipatu beharra dago: 1985eko otsailaren 19an Iberia LAE konpainiako hegaldi batek Euskal Irrati Telebistaren antena bat jo zuen Madril-Bilbao egiten ari zela; iparraldeko mazelan erori zen eta tripulazioko kide guztiak eta bidaiari guztiak hil ziren, 148 lagun guztira.</p><h2>Elezaharra</h2><p>Oiz mitoa eta elezaharra ere bada; izan ere Marik, "Anbotoko damak" bertan du bere bizitokietako bat. Esaten denez, zazpi urtean behin Anbototik Oizera joaten da Mari eta eguraldia (ona edo txarra) eta uztak (ugariak edo urriak) Mari dagoen tokiaren araberakoak</p>',
						slider:{
							slides:[
								{url: 'http://assets.zerumuga.eus/images/oiz/slider/slide2.jpg'},
								{url: 'http://assets.zerumuga.eus/images/oiz/slider/slide3.jpg'},
								{url: 'http://assets.zerumuga.eus/images/oiz/slider/slide4.jpg'},
								{url: 'http://assets.zerumuga.eus/images/oiz/slider/slide5.jpg'},
								{url: 'http://assets.zerumuga.eus/images/oiz/slider/slide1.jpg'},
							] 
						}
					},
					routes:{
						title : 'Ibilbideak',
						text : '<p>Ezagutu mendi honen ibilbide garrantzitsuenak.</p>',
						list:[
							{
								title: 'Garaitik',
								thumb: 'http://assets.zerumuga.eus/images/oiz/oiz_route1.jpg',
								level: 'medium',
								duration: '4 ordu 18 minutu',
								distance: '17,96km'
							},
							{
								title: 'Trabakuatik',
								thumb: 'http://assets.zerumuga.eus/images/oiz/oiz_route2.jpg',
								level: 'easy',
								duration: '1 ordu 14 minutu',
								distance: '5,19km'
							}
						]
					}

				};
			}
			break;
		};
		return data;
	};
	
	return mountain;
});