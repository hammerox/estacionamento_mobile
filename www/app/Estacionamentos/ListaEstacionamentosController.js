app.controller('ListaEstacionamentosCtrl', function ($rootScope,$cordovaLaunchNavigator,$cordovaGeolocation, $scope,$stateParams, $state, $timeout, $filter, $ionicModal, $ionicPopup, $ionicHistory, EstacionamentosService, UtilService, ComboBoxService) {
	console.log('ListaEstacionamentosCtrl');

	$scope.temItem = null;
	// ### INICIALIZAÇÃO DO CONTROLLER ######################################################
	$timeout(function(){
		console.log('temitem', $scope.temItem);
		if(!$scope.temItem){
			console.log('false');
				$scope.temItem = false;
		}

	}, 2000);

	$scope.raio = {
		valor: UtilService.getRaioDistancia()
	};
 					// 	EstacionamentosService.getEstacionamentos()
						// .then(function(result) {
						// 	$scope.estacionamentos = result;
						// 	UtilService.hideLoading();
						// },
						// 	function(result) {
						// 	UtilService.hideLoading();
						// 		UtilService.alerta('Erro de conexão', 'Verifique sua conexão com a internet e tente novamente.');
						// 		console.log("Erro tentativa 1");
						// 	});

	$scope.form = {
		mensagemObrigatorio:'ESTE CAMPO É OBRIGATÓRIO!',
		enviado: false
	};


	$scope.launchNavigator = function(endereco) {
   // var destination = [latitude, longitude];
	 var pos = {};
	 var posOptions = {timeout: 10000, enableHighAccuracy: false};
 	$cordovaGeolocation.getCurrentPosition(posOptions)
	.then(function (position) {
		pos.lat  = position.coords.latitude
		pos.lng = position.coords.longitude
		console.log(pos);
		var start = [pos.lat, pos.lng];
		var destination = endereco;
		var options = { 'appSelectionDialogHeader': "Selecione um aplicativo", 'appSelectionCancelButton': "Cancelar"}
		$cordovaLaunchNavigator.navigate(destination, start, options).then(function() {
			console.log("Navigator launched");
		}, function (err) {
			console.error(err);
		});

	 }, function(error) {
		 console.log(error);
		 deferred.reject('false');
	 });


  };

	// altera a distancia nos objetos após o calculo
	var listaEstacionamentos = function(){
		UtilService.showLoading();
		//$scope.temItem = true;
		var estacionamentosTemp = [];
		estacionamentosTemp = EstacionamentosService.getEstacionamentos();

			$scope.teste = estacionamentosTemp.length;
			 estacionamentosTemp.forEach(function(listItem, index){
				//  console.log(listItem, index);
				 EstacionamentosService.calculaDistancia($stateParams.destino, listItem.endereco)
					.then(function(result) {
						listItem.distancia = result;

						if(listItem.distancia && listItem.distancia.value <= $scope.raio.valor){
							$scope.temItem = true;
						}

						UtilService.hideLoading();
					})
					.then(function(result) {
						console.log('hihihihi');
					},
						function(result) {
							console.log(result);
							console.log("Erro tentativa 1");
						});



			 });


			$scope.estacionamentos = estacionamentosTemp;

		//	UtilService.hideLoading();
	}
	listaEstacionamentos();

	//
	// var lista = document.getElementsByClassName("lista");
	// angular.element(document).ready(function () {
	// 		var result = document.getElementsByClassName("lista");
	//  		console.log('result',result.length);
	//  });
	//
	// //  $scope.$watch(function () {
  // //  			return document.ion-list;
	// // 	}, function(val) {
	// // 	   alert('change');
	// // 	});
	//
	// 	$scope.init = function(){
	// 		//alert('init');
	// 		var result = document.getElementsByClassName("lista-magica list");
	//  		console.log('result',result);
	// 	}
	//
	// 	$scope.$on('$init', function(){
	//  		alert('viewcontent');
 // 		});

		// @@@ MÉTODO QUE REALIZA REFRESH DA TELA QUANDO ARRASTADA PARA BAIXO
		$scope.doRefresh = function() {
			listaEstacionamentos();
			$scope.$broadcast('scroll.refreshComplete');
		}
});
