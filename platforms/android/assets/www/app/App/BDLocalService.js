app.factory('BDLocalService', function ($window) {
	var login = [];

	return {
		get: function(chave){
				return JSON.parse($window.localStorage[chave] || '{}');
	  },
		add: function(chave, valor){
			$window.localStorage[chave] = JSON.stringify(valor);

		},
		remove: function(){
				$window.localStorage['usuarioLocal'] = '{}';
		}
	};
});
