app.directive 'contentInfo', ->
  {
    restrict: 'E'
    transclude: true
    scope: info: '='
    templateUrl: 'js/directives/contentInfo.html'
    link: (scope, element, attrs) ->

  }
