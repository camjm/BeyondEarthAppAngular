angular.module('beyondEarthApp').directive 'technologyInfo', ->
  {
    restrict: 'E'
    replace: true
    scope: info: '='
    templateUrl: 'app/shared/technologyInfo/technologyInfo.html'
    link: (scope, element, attrs) ->

  }
