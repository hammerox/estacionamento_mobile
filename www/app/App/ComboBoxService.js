app.factory('ComboBoxService', function ($rootScope, $http, $q, UtilService) {
	var urlServer = UtilService.getUrlServer();
	var timeout = UtilService.getTimeout();


	return {
		getMarcasVeiculo: function () {

			// Chamada Oficial
			var deferred = $q.defer();

			var url = urlServer + "/api/combo/veiculos/marcas";

						$http({
								url: url,
								method: "GET",
								timeout: timeout,
								params: {}
						 })
						 .then(function successCallback(response) {
							 console.log('successCallback');
							 console.log(response.data);
							 deferred.resolve(response.data);
					}, function errorCallback(response) {
							console.log('errorCallback');
							console.log(response);

							deferred.reject(response);
					});

				return deferred.promise;
		},
		getModelosVeiculo: function (marcaId) {
			// Chamada Oficial
			var deferred = $q.defer();

			var url = urlServer + "/api/combo/veiculos/marca/"+ marcaId +"/modelos";

						$http({
								url: url,
								method: "GET",
								timeout: timeout,
								params: {marca_id: marcaId, access_token: $rootScope.access_token}
						 })
						 .then(function successCallback(response) {
							 console.log('successCallback');
							 console.log(response.data);
							 deferred.resolve(response.data);
					}, function errorCallback(response) {
							console.log('errorCallback');
							console.log(response);

							deferred.reject(response);
					});

				return deferred.promise;
		},
		getVeiculosPerfil: function (usuarioId) {
			var deferred = $q.defer();

			var url = urlServer + "/api/veiculos/usuario/"+usuarioId;

						$http({
								url: url,
								method: "GET",
								timeout: timeout,
								params: {access_token: $rootScope.access_token}
						 })
						 .then(function successCallback(response) {
							 console.log('successCallback');
							 console.log(response.data);
							 deferred.resolve(response.data);
					}, function errorCallback(response) {
							console.log('errorCallback');
							console.log(response);

							deferred.reject(response);
					});

				return deferred.promise;
		},
		getTiposFeedback: function () {
			// Chamada Oficial
			var deferred = $q.defer();

			var url = urlServer + "/api/combo/feedback/tipos";

						$http({
								url: url,
								method: "GET",
								timeout: timeout,
								params: {access_token: $rootScope.access_token}
						 })
						 .then(function successCallback(response) {
							 console.log('successCallback');
							 console.log(response.data);
							 deferred.resolve(response.data);
					}, function errorCallback(response) {
							console.log('errorCallback');
							console.log(response);

							deferred.reject(response);
					});

				return deferred.promise;
		}
	};
});
