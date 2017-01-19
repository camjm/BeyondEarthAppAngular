angular.module('beyondEarthApp').controller 'HeaderController', [
  '$location'
  '$scope'
  ($location, $scope) ->
    $scope.brand = 'Beyond Earth App'
    #TODO: define navigation in app configuration, then inject as a 'value' dependency
    $scope.items = [
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
]
