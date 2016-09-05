app.directive 'technologyInfo', ->
  {
    restrict: 'E'
    replace: true
    scope: info: '='
    templateUrl: 'js/directives/technologyInfo.html'
    link: (scope, element, attrs) ->

  }
