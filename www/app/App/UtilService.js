app.factory('UtilService', function ($http, $ionicPopup, $ionicLoading, $q) {
	console.log('UtilService');



	return {
			alerta: function (titulo, mensagem) {
					$ionicPopup.alert({
					 title: titulo,
					 template: mensagem,
					 buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
				 		 text: 'OK',
				 		 type: 'button-energized',
				 		 onTap: function(e) {
				 		 }
				 	 }]
				 })
				 .then(function(res) {
					 console.log('ok');
				 });
			 },
	/* 		 toast: function (mensagem, duracao, posicao) {

				 if($cordovaToast){
					 $cordovaToast
					 .show(mensagem, duracao, posicao)
					 .then(function(success) {
						 // success
					 }, function (error) {

					 });
				 }else{
					  alerta('Rit2gether', 'Carona criada com sucesso!');
				 }

			 }, */
			 showLoading: function () {
				 $ionicLoading.show({
						templateUrl: 'app/App/loading.html',
					 noBackdrop: true
					 ,duration: 15000
				 });
			 },
			 hideLoading: function(){
				 	$ionicLoading.hide();
			 },
			  calculaIdade: function(data) { // birthday is a date

					 var ageDifMs = Date.now() - data.getTime();
					 var ageDate = new Date(ageDifMs); // miliseconds from epoch
					 return Math.abs(ageDate.getUTCFullYear() - 1970);
			 },
			  verificaVencimento: function(data) { // birthday is a date

					if(data < Date.now()){
						return true;
					}

 					 return false;
 			 },
			 validaHora: function(data) {
					var hora = parseInt(data.substring(0,2));
					var minuto = parseInt(data.substring(2,4));

					if(hora < 0 || hora > 23){
						return false;
					}else if(minuto < 0 || minuto > 59){
						return false;
					}

					 return true;
			 },
			 validaData: function(data) { // birthday is a date

						if(data.setHours(0,0,0,0) < new Date().setHours(0,0,0,0)){
							return false;
						}

					 return true;
			 },
			 validaCPF: function(Objcpf){
			    console.log('ValidarCPF');
			    console.log(Objcpf);

			    var cpf = Objcpf;
					if(cpf == undefined) return false;
			    if(cpf == '') return false;
			       // Elimina CPFs invalidos conhecidos
			       if (cpf.length != 11 ||
			           cpf == "00000000000" ||
			           cpf == "11111111111" ||
			           cpf == "22222222222" ||
			           cpf == "33333333333" ||
			           cpf == "44444444444" ||
			           cpf == "55555555555" ||
			           cpf == "66666666666" ||
			           cpf == "77777777777" ||
			           cpf == "88888888888" ||
			           cpf == "99999999999")
			               return false;
			       // Valida 1o digito
			       add = 0;
			       for (i=0; i < 9; i ++)
			           add += parseInt(cpf.charAt(i)) * (10 - i);
			           rev = 11 - (add % 11);
			           if (rev == 10 || rev == 11)
			               rev = 0;
			           if (rev != parseInt(cpf.charAt(9)))
			               return false;
			       // Valida 2o digito
			       add = 0;
			       for (i = 0; i < 10; i ++)
			           add += parseInt(cpf.charAt(i)) * (11 - i);
			       rev = 11 - (add % 11);
			       if (rev == 10 || rev == 11)
			           rev = 0;
			       if (rev != parseInt(cpf.charAt(10)))
			           return false;
			       return true;

		 	},
			 getUrlServer: function () {
						var producao = true;
						if(producao == true){
							//retornar url produção
							return "http://31.220.54.243/rit_api/public";
						}else{
							return "http://localhost:8080/rit_api/public";
						}
				},
 			 getTimeout: function () {
 							return 10000;
 				},
 			 getGoogleKey: function () {
 							return '682040145022-sk3r8lrg5r7unrvd20ogib05p3qpg5a9.apps.googleusercontent.com';
 				},
 			 getFacebookKey: function () {
 							return '481023422090766';
 				},
				convert(str) {
				    var date = new Date(str),
				        mnth = ("0" + (date.getMonth()+1)).slice(-2),
				        day  = ("0" + date.getDate()).slice(-2);
				    return [ date.getFullYear(), mnth, day ].join("-");
				},
				getNumeroLugaresPermitidos: function (){
					 return 4;
				},
				getPrecoMaximoCombustivelPermitido: function (){
					 return 20;
				},
				getPrecoMaximoEstacionamentoPermitido: function (){
					 return 40;
				},
				getPrecoMaximoTotalPermitido: function (){
					 return 60;
				},
				getMaiorIdade: function (){
					 return 18;
				},
				getRaioDistancia: function(){
					return 3000;
				}


	};
});
