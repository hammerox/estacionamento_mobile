app.controller('DetalheEstacionamentoCtrl', function ($rootScope, $scope, $state,$stateParams, $filter, $ionicModal, $ionicPopup, $ionicHistory, EstacionamentosService, UtilService, ComboBoxService) {
	console.log('DetalheEstacionamentoCtrl');

	// ### INICIALIZAÇÃO DO CONTROLLER ######################################################
	//UtilService.showLoading();

	// Detalhes estacionamentoId
	var estacionamentoId = $stateParams.estacionamentoId;
	if(estacionamentoId){
		$scope.estacionamento =	EstacionamentosService.getEstacionamento(estacionamentoId);
	}
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


});
