app.controller('CreditosZonaAzulCtrl', function ($rootScope, $scope, $state, $filter, $ionicActionSheet, $ionicModal, $ionicPopup, $ionicHistory, UtilService, ComboBoxService) {
	console.log('CreditosZonaAzulCtrl');

	// ### INICIALIZAÇÃO DO CONTROLLER ######################################################
	//UtilService.showLoading();
	$scope.credito = {};

	$scope.selecionarValor = function(valor) {
		console.log(valor);

		// Show the action sheet
    var hideSheet = $ionicActionSheet.show({
      buttons: [
				{ text: '<i class="icon ion-card positive"></i> Cartão' },
				{ text: '<i class="icon ion-ios-barcode"></i> Boleto' },
			 { text: '<i class="icon ion-arrow-swap balanced"> </i>Transferência' }
      ],
     //  destructiveText: 'Delete',
      titleText: 'Selecione a forma de pagamento',
      cancelText: '<p class="text-red"> Cancelar </p>',
      cancel: function() {
           // add cancel code..
         },
      buttonClicked: function(index) {
 			 console.log(index);
				 var confirmPopup = $ionicPopup.confirm({
	 				title: 'Crédito Zona Azul',
	 				template: 'Confirma adição de crédito?',
					buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
						 text: 'Cancelar',
						 type: 'button-default',
						 onTap: function(e) {
							 e.preventDefault();
							 confirmPopup.close();
						 }
					 }, {
						 text: 'OK',
						 type: 'button-energized',
						 onTap: function(e) {
							 e.preventDefault();

							 if(index == 0){
						 		$state.go('app.cartao-zona-azul', {credito: valor});
								confirmPopup.close();
						 	}else if(index == 1){
						 		$state.go('app.boleto-zona-azul', {credito: valor});
								confirmPopup.close();
						 	}else {
						 		$state.go('app.transferencia-zona-azul', {credito: valor});
								confirmPopup.close();
						 	}						 }
					 }]
	 			});


      }
    });



 };

	$scope.showPopup = function() {
  $scope.data = {};


		// An elaborate, custom popup
		var myPopup = $ionicPopup.show({
			template: '<input type="number" ng-model="credito.valor">',
			title: 'Valor',
			subTitle: 'Digite o valor desejado',
			scope: $scope,
			buttons: [
				{ text: 'Cancelar' },
				{
					text: '<b>Continuar</b>',
					type: 'button-energized',
					onTap: function(e) {
							e.preventDefault();
							console.log($scope.credito.valor);
								if($scope.credito.valor){
									myPopup.close();

									// Show the action sheet
									var hideSheet = $ionicActionSheet.show({
										buttons: [
											{ text: '<i class="icon ion-card positive"></i> Cartão' },
											{ text: '<i class="icon ion-ios-barcode"></i> Boleto' },
										 { text: '<i class="icon ion-arrow-swap balanced"> </i>Transferência' }
										],
									 //  destructiveText: 'Delete',
										titleText: 'Selecione a forma de pagamento',
										cancelText: '<p class="text-red"> Cancelar </p>',
										cancel: function() {
												 // add cancel code..
											 },
										buttonClicked: function(index) {
										 console.log(index);
											 var confirmPopup = $ionicPopup.confirm({
												title: 'Crédito Zona Azul',
												template: 'Confirma adição de crédito?',
												buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
													 text: 'Cancelar',
													 type: 'button-default',
													 onTap: function(e) {
														 e.preventDefault();
														 confirmPopup.close();
													 }
												 }, {
													 text: 'OK',
													 type: 'button-energized',
													 onTap: function(e) {
														 e.preventDefault();

														 if(index == 0){
															$state.go('app.cartao-zona-azul', {credito: $scope.credito.valor});
															confirmPopup.close();
															myPopup.close();
														}else if(index == 1){
															$state.go('app.boleto-zona-azul', {credito: $scope.credito.valor});
															confirmPopup.close();
															myPopup.close();

														}else {
															$state.go('app.transferencia-zona-azul', {credito: $scope.credito.valor});
															confirmPopup.close();
															myPopup.close();

														}
													}
												 }]
											});


										}
									});
								}else {
										UtilService.alerta('Aviso','Preencha um valor de crédito.');
								}

					}
				}
			]
		});

		myPopup.then(function(res) {

		});







  // $timeout(function() {
  //    myPopup.close(); //close the popup after 3 seconds for some reason
  // }, 3000);
 };

	$scope.form = {
		mensagemObrigatorio:'ESTE CAMPO É OBRIGATÓRIO!',
		enviado: false
	};


});
