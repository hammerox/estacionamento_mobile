app.controller('CartaoZonaAzulCtrl', function ($rootScope, $scope, $state, $stateParams, $filter, $ionicModal, $ionicPopup, $ionicHistory, UtilService, ComboBoxService) {
	console.log('CartaoZonaAzulCtrl');

	// ### INICIALIZAÇÃO DO CONTROLLER ######################################################
	//UtilService.showLoading();
	$scope.credito = {};
	$scope.pagamento = {};
	var credito = $stateParams.credito;
	console.log(credito);
	if(credito){
		$scope.pagamento.valor = "R$"+credito;
	}

	$scope.form = {
		mensagemObrigatorio:'ESTE CAMPO É OBRIGATÓRIO!',
		enviado: false
	};

	$scope.finalizaPagamento = function(){
		console.log($scope.pagamento.bandeira);
		if($scope.pagamento.bandeira  !=  undefined && $scope.pagamento.numero_cartao  != undefined && $scope.pagamento.titular  != undefined
		&& $scope.pagamento.mes_vencimento  != undefined && $scope.pagamento.ano_vencimento  != undefined && $scope.pagamento.cvv  != undefined){

			UtilService.alerta('Aviso', 'Pagamento realizado com sucesso.');
			$state.go('app.home');
		}else{
			UtilService.alerta('Aviso', 'Por favor, preencha todos os campos.');
		}
	};
});
