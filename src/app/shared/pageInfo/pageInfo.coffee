angular.module('beyondEarthApp').directive 'pageInfo', ->
  {
    restrict: 'E'
    scope: info: '='
    templateUrl: 'js/directives/pageInfo.html'
    link: (scope, element, attrs) ->

  }
