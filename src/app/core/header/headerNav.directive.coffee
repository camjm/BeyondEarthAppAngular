angular.module('beyondEarthApp').directive 'headerNav', [
  '$location'
  ($location) ->
    {
      restrict: 'E'
      replace: true
      transclude: true
      scope: path: '='
      templateUrl: 'app/core/header/headerNav.html'
      link: (scope, element, attrs) ->
        scope.isActive = () ->
          $location.path() == scope.path
    }
]
