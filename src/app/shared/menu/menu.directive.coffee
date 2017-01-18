angular.module('beyondEarthApp').directive 'menu', [
  '$location'
  ($location) ->
    {
      restrict: 'E'
      replace: true
      templateUrl: 'app/shared/menu/menu.html'
      link: (scope, element, attrs) ->
        #TODO: define navigation in app configuration, then inject as a 'value' dependency
        scope.items = [
          {
            text: 'My Games'
            path: '/games/'
          }
          {
            text: 'Technologies'
            path: '/technologies/'
          }
          {
            text: 'Units'
            path: '/units/'
          }
          {
            text: 'Buildings'
            path: '/buildings/'
          }
          {
            text: 'Affinities'
            path: '/affinities/'
          }
          {
            text: 'Factions'
            path: '/factions/'
          }
        ]

        return
    }
]
