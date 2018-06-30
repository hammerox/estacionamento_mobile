app.factory('ZonaAzulService', function ($http, $q, UtilService, $rootScope) {
	var urlServer = UtilService.getUrlServer();
	var timeout = UtilService.getTimeout();

	

	return {

		getZonaAzul: function () {
			return estacionamentos;
		}
	};
});
