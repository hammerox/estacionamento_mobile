// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform, $rootScope, $location, $timeout, $ionicLoading, BDLocalService, LoginService, UtilService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
       // org.apache.cordova.statusbar required
       //StatusBar.styleDefault();
       StatusBar.backgroundColorByHexString("#02031f");
       // $cordovaStatusbar.styleHex('#');
     }

    if(window.cordova){

      cordova.plugins.diagnostic.isLocationAuthorized(function(authorized){
        console.log("Location is ", (authorized ? "authorized" : "unauthorized"));
        if(!authorized){
          cordova.plugins.diagnostic.requestLocationAuthorization(function(status){
            switch(status){
              case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
              console.log("Permission not requested");
              break;
              case cordova.plugins.diagnostic.permissionStatus.GRANTED:
              console.log("Permission granted");
              break;
              case cordova.plugins.diagnostic.permissionStatus.DENIED:
              console.log("Permission denied");
              break;
              case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
              console.log("Permission permanently denied");
              break;
            }
          }, function(error){
            console.error(error);
          });
        }

      }, function(error){
        console.error("The following error occurred: "+error);
      });
    }


  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'app/App/menu.html',
    controller: 'AppCtrl'
  })
 .state('app.home', {
      url: '/home',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'app/Home/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
  .state('app.creditos-zona-azul', {
      url: '/creditos-zona-azul',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'app/ZonaAzul/creditos-zona-azul.html',
          controller: 'CreditosZonaAzulCtrl'
        }
      }
    })
    .state('app.cartao-zona-azul', {
        url: '/cartao-zona-azul/:credito',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'app/ZonaAzul/cartao-zona-azul.html',
            controller: 'CartaoZonaAzulCtrl'
          }
        }
      })
      .state('app.boleto-zona-azul', {
          url: '/boleto-zona-azul/:credito',
          cache: false,
          views: {
            'menuContent': {
              templateUrl: 'app/ZonaAzul/boleto-zona-azul.html',
              controller: 'BoletoZonaAzulCtrl'
            }
          }
        })
        .state('app.transferencia-zona-azul', {
            url: '/transferencia-zona-azul/:credito',
            cache: false,
            views: {
              'menuContent': {
                templateUrl: 'app/ZonaAzul/transferencia-zona-azul.html',
                controller: 'TransferenciaZonaAzulCtrl'
              }
            }
          })
 .state('app.lista-estacionamentos', {
      url: '/lista-estacionamentos/:destino',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'app/Estacionamentos/lista-estacionamentos.html',
          controller: 'ListaEstacionamentosCtrl'
        }
      }

  })
  .state('app.destino', {
       url: '/destino',
       cache: false,
       views: {
         'menuContent': {
           templateUrl: 'app/Estacionamentos/destino.html',
           controller: 'DestinoCtrl'
         }
       }

   })
  .state('app.detalhe-estacionamento', {
       url: '/detalhe-estacionamento/:estacionamentoId',
       cache: false,
       views: {
         'menuContent': {
           templateUrl: 'app/Estacionamentos/detalhe-estacionamento.html',
           controller: 'DetalheEstacionamentoCtrl'
         }
       }

   })
  .state('app.em-desenvolvimento', {
      url: '/em-desenvolvimento',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'app/App/em-desenvolvimento.html',
          controller: 'AppCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})
.service('LocationService', function($q){
  var autocompleteService = new google.maps.places.AutocompleteService();
  var detailsService = new google.maps.places.PlacesService(document.createElement("input"));
  return {
    searchAddress: function(input) {
      var deferred = $q.defer();

      autocompleteService.getPlacePredictions({
        input: input
      }, function(result, status) {
        if(status == google.maps.places.PlacesServiceStatus.OK){
          console.log(status);
          deferred.resolve(result);
        }else{
          deferred.reject(status)
        }
      });

      return deferred.promise;
    },
    getDetails: function(placeId) {
      var deferred = $q.defer();
      detailsService.getDetails({placeId: placeId}, function(result) {
        deferred.resolve(result);
      });
      return deferred.promise;
    }
  };
})
.directive('locationSuggestion', function($ionicModal, LocationService){
  return {
    restrict: 'A',
    scope: {
      location: '='
    },
    link: function($scope, element){
      console.log('locationSuggestion started!');
      $scope.search = {};
      $scope.search.suggestions = [];
      $scope.search.query = "";

      $ionicModal.fromTemplateUrl('app/App/location.html', {
        scope: $scope,
        focusFirstInput: true
      }).then(function(modal) {
        $scope.modal = modal;
      });
      element[0].addEventListener('focus', function(event) {
        $scope.open();
      });
      $scope.$watch('search.query', function(newValue) {
        if (newValue) {
          LocationService.searchAddress(newValue).then(function(result) {
            $scope.search.error = null;
            $scope.search.suggestions = result;
          }, function(status){
            $scope.search.error = "There was an error :( ", status;
          });
        };
        $scope.open = function() {
          $scope.modal.show();
        };
        $scope.close = function() {
          $scope.modal.hide();
        };
        $scope.choosePlace = function(place) {
          LocationService.getDetails(place.place_id).then(function(location) {
            $scope.location = location.formatted_address;
            $scope.close();
          });
        };
      });
    }
  }
});
