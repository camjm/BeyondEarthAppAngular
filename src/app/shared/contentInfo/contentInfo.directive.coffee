angular.module('beyondEarthApp').directive 'contentInfo', ->
  {
    restrict: 'E'
    transclude: true
    scope: info: '='
    templateUrl: 'app/shared/contentInfo/contentInfo.html'
    link: (scope, element, attrs) ->

  }
