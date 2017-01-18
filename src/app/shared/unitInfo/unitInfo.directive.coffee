angular.module('beyondEarthApp').directive 'unitInfo', ->
  {
    restrict: 'A'
    scope: info: '='
    templateUrl: 'app/shared/unitInfo/unitInfo.html'
    link: (scope, element, attrs) ->

  }
