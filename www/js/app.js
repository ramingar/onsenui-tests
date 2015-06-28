angular.module('pruebaApp', [
  'onsen.directives',
  'ngRoute',
  'pruebaControllers'
])


  .config(['$routeProvider', '$interpolateProvider',
    function($routeProvider, $interpolateProvider) {

      $interpolateProvider.startSymbol('[[');
      $interpolateProvider.endSymbol(']]');

      $routeProvider
      .when(
        '/', {
          templateUrl:'templates/profile.html',
          reloadOnSearch: false
        }
      )
      .otherwise({
        redirectTo: '/'
      });
    }
  ]);