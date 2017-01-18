angular.module('beyondEarthApp').directive 'menuItem', [
  '$location'
  ($location) ->
    {
      restrict: 'E'
      replace: true
      transclude: true
      scope: path: '='
      templateUrl: 'app/shared/menu/menuItem.html'
      link: (scope, element, attrs) ->
        scope.isActive = () ->
          $location.path() == scope.path
    }
]
