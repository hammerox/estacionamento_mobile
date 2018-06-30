app.factory('EstacionamentosService', function ($http, $q, $cordovaGeolocation, $timeout, UtilService, $rootScope) {
	var urlServer = UtilService.getUrlServer();
	var timeout = UtilService.getTimeout();

	// var estacionamentos = [
	// 	{id:1,
	// 	nome:'Estacionamento X',
	// 	endereco: 'Avenida Paulista, 500 - São Paulo',
	// 	distancia: '0',
	// 	preco: 45},
	// 	{id:2,
	// 	nome:'Estacionamento Y',
	// 	endereco: 'Avenida São João, 233 - São Paulo',
	// 	distancia: '1000m',
	// 	preco: 35}
	// ];
	var estacionamentos = [
		{
			id: 1,
			distancia: '0',
			empresa: 'JR TRIUNFO',
			edificio: 'ARRUDA I',
			endereco: 'RUA ARRUDA ALVIM , 119, PINHEIROS',
			cep: '05410-020',
			mensalidade: 300,
			mensalidade_moto: 250,
			valor_avulso_meia_hora: 0,
			valor_avulso_hora: 12,
			valor_demais_horas: 6,
			valor_diaria: 25,
			horario: '7:00 as 20:30'
		},
		{
			id: 2,
			distancia: '0',
			empresa: 'TRIUNFO',
			edificio: 'AQUASPORT',
			endereco: 'RUA GIRASSOL, 675  VILA MADALENA',
			cep: '05433-000',
			mensalidade: 250,
			mensalidade_moto: 0,
			valor_avulso_meia_hora: 0,
			valor_avulso_hora: 0,
			valor_demais_horas: 0,
			valor_diaria: 0,
			horario: '7:00 as 22:00'
 	 },
	 {
		 id: 3,
		 distancia: '0',
		 empresa: 'TRIUNFO',
		 edificio: 'G9 - 4',
		 endereco: 'RUA BORGES LAGOA, 1070',
		 cep: '04038-002',
		 mensalidade: 270,
		 mensalidade_moto: 180,
		 valor_avulso_meia_hora: 7,
		 valor_avulso_hora: 13,
		 valor_demais_horas: 7,
		 valor_diaria: 25,
		 horario: '7:00 as 22:00'
	},
	{
		id: 4,
		distancia: '0',
		empresa: 'TRIUNFO',
		edificio: 'ED. DIOGO (HOME)',
		endereco: 'RUA DIOGO JACOME, 554 VL NOVA CONCEIÇÃO',
		cep: '04512-001',
		mensalidade: 264,
		mensalidade_moto: 0,
		valor_avulso_meia_hora: 0,
		valor_avulso_hora: 0,
		valor_demais_horas: 0,
		valor_diaria: 20,
		horario: '24h'
 },
 {
	 id: 5,
	 distancia: '0',
	 empresa: 'TRIUNFO',
	 edificio: 'ED. PARK OFFICE',
	 endereco: 'RUA FRANCISCO MATARAZZO, 404  BARRA FUNDA',
	 cep: '05001-000',
	 mensalidade: 180,
	 mensalidade_moto: 120,
	 valor_avulso_meia_hora: 0,
	 valor_avulso_hora: 0,
	 valor_demais_horas: 0,
	 valor_diaria: 10,
	 horario: '07:00 as 23:00'
},
{
	id: 6,
	distancia: '0',
	empresa: 'TRIUNFO',
	edificio: 'SPAZIO',
	endereco: 'RUA DR. MIRANDA DE AZEVEDO, 1059 V. POMPÉIA',
	cep: '05027-000',
	mensalidade: 0,
	mensalidade_moto: 0,
	valor_avulso_meia_hora: 0,
	valor_avulso_hora: 0,
	valor_demais_horas: 0,
	valor_diaria: 0,
	horario: ''
},
{
	id: 7,
	distancia: '0',
	empresa: 'TRIUNFO',
	edificio: 				'VILA NOVA OFFICE',
	endereco: 				'RUA AFONSO BRAZ, 579  VILA NOVA CONCEIÇÃO',
	cep: 					'04511-011',
	mensalidade:			250,
	mensalidade_moto: 		200,
	valor_avulso_meia_hora:16,
	valor_avulso_hora: 	4,
	valor_demais_horas: 	35,
	valor_diaria: 0,
	horario: '06:30 as 22:00'
},
{
	id: 8,
	distancia: '0',
	empresa: 'TRIUNFO',
	edificio: 				'WORK PLACE',
	endereco: 				'AV. AFONSO BOVERO, 1057 PERDIZES',
	cep: 					'05019-011',
	mensalidade:			242,
	mensalidade_moto: 		0,
	valor_avulso_meia_hora:14,
	valor_avulso_hora: 	4,
	valor_demais_horas: 	25,
	valor_diaria: 0			,
	horario: '07:00 AS 22:01'
},
{
	id: 9,
	distancia: '0',
	empresa: 'TRIUNFO',
	edificio: 'CLÍNICA MAIS',
	endereco: 'AV. REPÚBLICA DO LÍBANO, 886,',
	cep: '04502-001',
	mensalidade: 0,
	mensalidade_moto: 0,
	valor_avulso_meia_hora: 0,
	valor_avulso_hora: 0,
	valor_demais_horas: 0,
	valor_diaria: 0,
	horario: ''
},
{
	id: 10,
	distancia: '0',
	empresa: 'JR2 TRIUNFO',
	edificio: 'APAE',
	endereco: 'RUA LOEFGREEN, 2070 VILA MARIANA',
	cep: '04040-003',
	mensalidade: 280,
	mensalidade_moto: 0 ,
	valor_avulso_meia_hora:0,
	valor_avulso_hora: 14,
	valor_demais_horas: 6	,
	valor_diaria: 38	,
	horario: '07:00 AS 22:01'
},
{
	id: 11,
	distancia: '0',
	empresa: 'JR2 TRIUNFO',
	edificio: 'CONSELHEIRO',
	endereco: 'RUA CONSELHEIRO NÉBIAS, 246 /262 - CENTRO',
	cep: '01203-000',
	mensalidade:242	,
	mensalidade_moto: 200,
	valor_avulso_meia_hora:0,
	valor_avulso_hora: 	10,
	valor_demais_horas: 0,
	valor_diaria: 12,
	horario: '24h'
},
{
	id: 12,
	distancia: '0',
	empresa: 'JR2 TRIUNFO',
	edificio: 'ED. IRAPURU' ,
	endereco: 'AV. BRIGADEIRO FARIA LIMA, 2081 JD. PAULISTANO',
	cep: '01452-001',
	mensalidade:440,
	mensalidade_moto: 0	,
	valor_avulso_meia_hora:0,
	valor_avulso_hora: 	15,
	valor_demais_horas: 	5,
	valor_diaria: 0,
	horario: '7:00 as 22:00'
},
{
	id: 13,
	distancia: '0',
	empresa: 'JR2 TRIUNFO',
	edificio: 'DIOGO - TERRENO'	,
	endereco: 'AV. DOUTOR DIOGO DE FARIAS ,155  - VL CLEMENTINO',
	cep: '04037-000',
	mensalidade: 200,
	mensalidade_moto: 0 ,
	valor_avulso_meia_hora:0,
	valor_avulso_hora: 	0,
	valor_demais_horas: 0,
	valor_diaria: 12,
	horario: '6:30: 21:00'
},
{
	id: 14,
	distancia: '0',
	empresa: 'JR2 TRIUNFO',
	edificio: 'FUNCHAL',
	endereco: 'RUA FUNCHAL, 411 VILA OLIMPIA',
	cep: '04551-060',
	mensalidade: 350,
	mensalidade_moto: 300,
	valor_avulso_meia_hora:10,
	valor_avulso_hora: 	15,
	valor_demais_horas: 5,
	valor_diaria: 20,
	horario: '7:00 AS 22:00'
},
{
	id: 15,
	distancia: '0',
	empresa: 'JR2 TRIUNFO',
	edificio:'11 DE JUNHO',
	endereco:'AV . 11 DE JUNHO, 1070',
	cep: '04041-004',
	mensalidade: 280,
	mensalidade_moto: 200,
	valor_avulso_meia_hora:0,
	valor_avulso_hora: 	12,
	valor_demais_horas: 0,
	valor_diaria: 12	,
	horario: '06:30 as 22:00'
},
{
	id: 16,
	distancia: '0',
	empresa: 'JR2 TRIUNFO',
	edificio:'G9II'	,
	endereco:'RUA BORGES LAGOA , 971 VL. CLEMENTINO' ,
	cep: '04038-032',
	mensalidade: 330,
	mensalidade_moto: 180,
	valor_avulso_meia_hora:10,
	valor_avulso_hora: 	14,
	valor_demais_horas: 6,
	valor_diaria: 30,
	horario: '7:00 AS 22:00'
},
{
	id: 17,
	distancia: '0',
	empresa: 'JR2 TRIUNFO',
	edificio: 'G9III',
	endereco: 'RUA BORGES LAGOA , 1083 VL. CLEMENTINO',
	cep: '04038-032',
	mensalidade: 300,
	mensalidade_moto: 160,
	valor_avulso_meia_hora:7,
	valor_avulso_hora: 	13,
	valor_demais_horas:  7,
	valor_diaria: 25,
	horario: '7:00 AS 22:01'
},
{
	id: 18,
	distancia: '0',
	empresa: 'JR2 TRIUNFO',
	edificio: 'GLORIA II',
	endereco: 'RUA DA GLORIA, 132  LIBERDADE  (CENTRO)',
	cep: '01510-001',
	mensalidade: 250,
	mensalidade_moto: 0,
	valor_avulso_meia_hora: 120,
	valor_avulso_hora: 	10,
	valor_demais_horas: 5,
	valor_diaria: 25,
	horario: '7:00 as 23:00'
},
{
	id: 19,
	distancia: '0',
	empresa: 'JR2 TRIUNFO',
	edificio: 	'PLAZA IGUATEMI',
	endereco: 	'AV. BRIGADEIRO FARIA LIMA, 2277 JD. PAULISTANO',
	cep: '01452-000',
	mensalidade:550,
	mensalidade_moto: 	275,
	valor_avulso_meia_hora:0,
	valor_avulso_hora: 	25,
	valor_demais_horas: 10,
	valor_diaria: 0,
	horario: '24h'
},
{
	id: 20,
	distancia: '0',
	empresa: 'JR2 TRIUNFO',
	edificio: 'VIRGILIO',
	endereco: 'RUA DR. VIRGILIO DE CARVALHO PINTO, 382 PINHEIROS',
	cep: 	'05415-020',
	mensalidade: 350 ,
	mensalidade_moto: 0	,
	valor_avulso_meia_hora:250,
	valor_avulso_hora: 	10,
	valor_demais_horas: 5,
	valor_diaria: 0	,
	horario: '24h'
},
{
	id: 21,
	distancia: '0',
	empresa: 'JR2 TRIUNFO',
	edificio: 'WEST TOWER',
	endereco: 'RUA JERICÓ, 255 PINHEIROS',
	cep: '05435-040',
	mensalidade: 330,
	mensalidade_moto: 220,
	valor_avulso_meia_hora:0,
	valor_avulso_hora: 	18,
	valor_demais_horas:6,
	valor_diaria: 	36,
	horario: '24h'
},
{
	id: 22,
	distancia: '0',
	empresa: 'JR3 TRIUNFO',
	edificio: 'BERRINI' ,
	endereco: 'AV ARANDU, 205 BROOKLIN',
	cep: '04562-030',
	mensalidade: 330,
	mensalidade_moto: 250,
	valor_avulso_meia_hora:0,
	valor_avulso_hora: 	15,
	valor_demais_horas: 5,
	valor_diaria: 30,
	horario: '07:00 as 21:00'
},
{
	id: 23,
	distancia: '0',
	empresa: 'JR3 TRIUNFO',
	edificio: 'CIDADE JARDIM',
	endereco: 'RUA PROFESSOR ARTUR RAMOS, 127',
	cep: '01454-011',
	mensalidade: 400,
	mensalidade_moto:350,
	valor_avulso_meia_hora:0,
	valor_avulso_hora: 	17,
	valor_demais_horas: 5,
	valor_diaria: 35,
	horario: '06:00 AS 23:00'
},
{
	id: 24,
	distancia: '0',
	empresa: 'JR3 TRIUNFO',
	edificio: 'FIANDEIRAS',
	endereco: 'RUA FIANDEIRAS, 306 VILA OLIMPIA',
	cep: '04545-001',
	mensalidade:220	,
	mensalidade_moto:180,
	valor_avulso_meia_hora:6,
	valor_avulso_hora: 	0,
	valor_demais_horas:0,
	valor_diaria: 12,
	horario: '07:00 AS 22:00'
},
{
	id: 25,
	distancia: '0',
	empresa: 'JR3 TRIUNFO',
	edificio: 'JK',
	endereco: 'RUA CLODOMIRO AMAZONAS, 1099 VL. OLIMPIA' ,
	cep: '04537-012',
	mensalidade: 275,
	mensalidade_moto: 180,
	valor_avulso_meia_hora:0,
	valor_avulso_hora: 	14,
	valor_demais_horas: 6,
	valor_diaria: 25 ,
	horario: '06:30 AS 21:00'
},
{
	id: 26,
	distancia: '0',
	empresa: 'JR3 TRIUNFO',
	edificio: 'JCP',
	endereco: 'RUA DR. JOÃO CLIMACO PEREIRA, 65 ITAIM BIBI',
	cep: '04532-070',
	mensalidade: 280,
	mensalidade_moto: 230,
	valor_avulso_meia_hora:10,
	valor_avulso_hora: 	15,
	valor_demais_horas: 6,
	valor_diaria: 30,
	horario: '24h'
},
{
	id: 27,
	distancia: '0',
	empresa: 'JR3 TRIUNFO',
	edificio: 'MORUMBI'	,
	endereco: 'RUA FRANCISCO TRAMONTANO, 101. MORUMBI'	,
	cep: '05686-010',
	mensalidade: 270,
	mensalidade_moto: 200,
	valor_avulso_meia_hora:0,
	valor_avulso_hora: 	12	,
	valor_demais_horas: 3,
	valor_diaria: 25,
	horario: '06:30 AS 21:00'
},
{
	id: 28,
	distancia: '0',
	empresa: 'JR3 TRIUNFO',
	edificio: 'PARQUE DA CIDADE',
	endereco: 'AV. DAS NAÇÕES UNIDAS , 14401. CHACARA SANTO ANTONIO',
	cep: '04794-000',
	mensalidade:380,
	mensalidade_moto:250,
	valor_avulso_meia_hora:0,
	valor_avulso_hora: 	0,
	valor_demais_horas:0,
	valor_diaria: 15,
	horario: '06:30 as 22:00'
},
{
	id: 29,
	distancia: '0',
	empresa: 'JR3 TRIUNFO',
	edificio: 'WORK PLACE - FUNCHAL',
	endereco: 'RUA FUNCHAL, 538 VILA OLIMPIA',
	cep: '04551-060',
	mensalidade:435	,
	mensalidade_moto:0,
	valor_avulso_meia_hora:0,
	valor_avulso_hora: 	10,
	valor_demais_horas:5,
	valor_diaria:25	,
	horario: '24h'
}
	];


	var calculaDistancia = function(endereco){

		console.log('calculaDistancia');
	// Chamada Oficial
	var deferred = $q.defer();

		var pos = {};
		// navigator.geolocation.getCurrentPosition(function(position) {
		//  pos = {
		// 	 lat: position.coords.latitude,
		// 	 lng: position.coords.longitude
		//  };

		var posOptions = {timeout: 10000, enableHighAccuracy: false};
	$cordovaGeolocation.getCurrentPosition(posOptions)
	 .then(function (position) {
		 pos.lat  = position.coords.latitude
		 pos.lng = position.coords.longitude

		 var origin1 = new google.maps.LatLng(pos.lat, pos.lng);
		 var destinationA = endereco;

		 var service = new google.maps.DistanceMatrixService();
		 service.getDistanceMatrix(
			 {
				 origins: [origin1],
				 destinations: [destinationA],
				 travelMode: google.maps.TravelMode.DRIVING,
			 //  transitOptions: TransitOptions,
			 //  drivingOptions: DrivingOptions,
			 //  unitSystem: UnitSystem,
				 avoidHighways: false,
			 //  avoidTolls: Boolean,
			 }, callback);

			 function callback(response, status) {
				 if(response.rows[0].elements[0].distance){
					 deferred.resolve(response.rows[0].elements[0].distance);

				 }else{
					 deferred.resolve(null);
				 }
				 // See Parsing the Results for
				 // the basics of a callback function.
			 }


		}, function(error) {
			console.log(error);
			deferred.reject('false');
		});




	 return deferred.promise;

	}



	return {

		getEstacionamentos: function () {
			return estacionamentos;
		},

		getEstacionamentosComDistancia: function () {
				var z = 0;

			for (var i = 0; i < estacionamentos.length; i++) {
				calculaDistancia(estacionamentos[i].endereco)
					.then(function(result) {
						console.log(result.value);
						if(result.value <= 3000){
							console.log(z);
							estacionamentos[z].distancia = result.text;
						}
						z++;

					},
						function(result) {
							console.log(result);
							console.log("Erro tentativa 1");
						});
			 }

			$timeout(function() {
				 	return estacionamentos;
			 console.log('update with timeout fired')
		 }, 2000);



		},

		getEstacionamento: function (id) {
			for (var i = 0; i < estacionamentos.length; i++) {
				if(id == estacionamentos[i].id){
						return estacionamentos[i];
				}
			}
		},
		calculaDistancia: function(destino, enderecoEstacionamento, raio){

			console.log('calculaDistancia');
		// Chamada Oficial
		var deferred = $q.defer();

			var pos = {};
			// navigator.geolocation.getCurrentPosition(function(position) {
			//  pos = {
			// 	 lat: position.coords.latitude,
			// 	 lng: position.coords.longitude
			//  };

			var posOptions = {timeout: 10000, enableHighAccuracy: false};
			$cordovaGeolocation.getCurrentPosition(posOptions)
		 .then(function (position) {
			 pos.lat  = position.coords.latitude
			 pos.lng = position.coords.longitude
			// console.log(pos.lat, pos.lng);
			// var origin1 = new google.maps.LatLng(pos.lat, pos.lng);
			
			var origin1 = destino;
			 var destinationA = enderecoEstacionamento;
			// console.log(origin1, destinationA);

			 var service = new google.maps.DistanceMatrixService();
			 service.getDistanceMatrix(
				 {
					 origins: [origin1],
					 destinations: [destinationA],
					 travelMode: google.maps.TravelMode.DRIVING,
				 //  transitOptions: TransitOptions,
				 //  drivingOptions: DrivingOptions,
				 //  unitSystem: UnitSystem,
					 avoidHighways: false,
				 //  avoidTolls: Boolean,
				 }, callback);

				 function callback(response, status) {

					 if(response.rows[0].elements[0].distance && response.rows[0] != undefined){
						 deferred.resolve(response.rows[0].elements[0].distance);
					 }else{
						 deferred.resolve(null);
					 }
					 // See Parsing the Results for
					 // the basics of a callback function.
				 }


			}, function(error) {
				console.log(error);
				deferred.reject('false');
			});




		 return deferred.promise;

		}

	};
});
