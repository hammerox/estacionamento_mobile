app.controller('DestinoCtrl', function ($rootScope, $scope, $http, $state,$stateParams, $filter, $ionicModal, $ionicPopup, $ionicHistory, EstacionamentosService, UtilService, ComboBoxService) {
	console.log('DestinoCtrl');

	// ### INICIALIZAÇÃO DO CONTROLLER ######################################################
	//UtilService.showLoading();
	$scope.local = {};
	$scope.location = {};
	// ### MÉTODOS ######################################################
		$scope.buscaEstacionamentos = function(){
			// Valida se pelo menos um campos está preenchido antes de buscar
		if($scope.local.destino != '' && $scope.local.destino != undefined){
			console.log($scope.local.destino);
				$state.go('app.lista-estacionamentos', {destino: $scope.local.destino});
		 }else {
		 	UtilService.alerta('Aviso','É necessário preencher ao menos um campo.');
			 }
		}
		// var rad = function(x) {
		// return x * Math.PI / 180;
		// };

		var getCurrentLocation = function(){
			var pos = {};
			navigator.geolocation.getCurrentPosition(function(position) {
			 pos = {
				 lat: position.coords.latitude,
				 lng: position.coords.longitude
			 };
			 return pos;
		 }, function() {
			 return false;
		 });
		}



	// @@@ FUNÇÃO DE CALLBACK DO INPUT DE ENDEREÇOS DO GOOGLE
	$scope.data = {};
	$scope.locationChanged = function (location) {

  };

	$scope.form = {
		mensagemObrigatorio:'ESTE CAMPO É OBRIGATÓRIO!',
		enviado: false
	};


});
