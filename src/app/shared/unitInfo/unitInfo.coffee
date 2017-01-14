angular.module('beyondEarthApp').directive 'unitInfo', ->
  {
    restrict: 'A'
    scope: info: '='
    templateUrl: 'js/directives/unitInfo.html'
    link: (scope, element, attrs) ->

  }
