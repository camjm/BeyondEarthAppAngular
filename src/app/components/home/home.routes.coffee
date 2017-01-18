angular.module('beyondEarthApp').config [
  '$routeProvider'
  ($routeProvider) ->
    $routeProvider
      .when '/',
          controller: 'HomeController'
          templateUrl: 'app/components/home/home.html'
    return
]
