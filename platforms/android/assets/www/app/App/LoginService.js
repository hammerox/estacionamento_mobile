app.factory('LoginService', function ($rootScope, $http, $q, BDLocalService, UtilService) {
	var login = [];
	var urlServer = UtilService.getUrlServer();
	var timeout = UtilService.getTimeout();
	return {
		login: function(dadosLogin){
			console.log(dadosLogin);

			//Chamada Oficial
			var deferred = $q.defer();

					var url = urlServer + "/oauth/access_token";
					console.log(url);
					$http({
							url: url,
							method: "POST",
							timeout: timeout,
							data: {username: dadosLogin.usuario, password: dadosLogin.senha, grant_type: 'password', client_id: 'bz1mG1tnOWu1yx8126f6YR0iVsA989R4', client_secret: ':14w]9@TN[0do);wT?a<542z0G!ZGD'}
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
				//BDLocalService.add('usuarioLocal', usuarioLocal);
			//Chamada Oficial
			// var deferred = $q.defer();
			//
			// 		var url = urlServer + "/api/login";
			// 		console.log(url);
			// 		$http({
			// 				url: url,
			// 				method: "POST",
			// 				timeout: timeout,
			// 				data: {login: dadosLogin.usuario, senha: dadosLogin.senha, access_token: $rootScope.access_token}
			// 		 })
			// 		 .then(function successCallback(response) {
			// 			 console.log('successCallback');
			// 			 console.log(response.data);
			// 			 deferred.resolve(response.data);
			// 	}, function errorCallback(response) {
			// 			console.log('errorCallback');
			// 			console.log(response);
			// 			deferred.reject(response);
			// 	});
			//
			// return deferred.promise;

	  },
		getToken: function(username, senha){

			//Chamada Oficial
			var deferred = $q.defer();

					var url = urlServer + "/oauth/access_token";
					console.log(url);
					$http({
							url: url,
							method: "POST",
							timeout: timeout,
							data: {username: username, password: senha, grant_type: 'password', client_id: 'bz1mG1tnOWu1yx8126f6YR0iVsA989R4', client_secret: ':14w]9@TN[0do);wT?a<542z0G!ZGD'}
					 })
					 .then(function successCallback(response) {
						 console.log('successCallback');
						 console.log(response.data);
						 deferred.resolve(response.data.access_token);
				}, function errorCallback(response) {
						console.log('errorCallback');
						console.log(response);
						deferred.reject(response);
				});

			return deferred.promise;
		},
		getDados: function(email){

			var deferred = $q.defer();

					var url = urlServer + "/api/login/dados";
					console.log(url);
					$http({
							url: url,
							method: "POST",
							timeout: timeout,
							data: {email: email, access_token: $rootScope.access_token}
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
		verificaAtivo: function(email){

			var deferred = $q.defer();

					var url = urlServer + "/api/login/verifica";
					console.log(url);
					$http({
							url: url,
							method: "POST",
							timeout: timeout,
							data: {email: email, access_token: $rootScope.access_token}
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
