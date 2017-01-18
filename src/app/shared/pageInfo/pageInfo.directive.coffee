angular.module('beyondEarthApp').directive 'pageInfo', ->
  {
    restrict: 'E'
    scope: info: '='
    templateUrl: 'app/shared/pageInfo/pageInfo.html'
    link: (scope, element, attrs) ->

  }
