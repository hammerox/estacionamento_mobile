app.controller('HomeCtrl', function ($rootScope, $scope, $state, $filter, $ionicModal, $ionicPopup, $ionicHistory, UtilService, ComboBoxService) {
	console.log('HomeCtrl');

	// ### INICIALIZAÇÃO DO CONTROLLER ######################################################
	//UtilService.showLoading();


	$scope.form = {
		mensagemObrigatorio:'ESTE CAMPO É OBRIGATÓRIO!',
		enviado: false
	};

	
});
