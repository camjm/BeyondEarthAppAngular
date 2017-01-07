# Fetches Building data from the backend.
angular.module('core.building').factory 'Building', [
  '$resource'
  ($resource) ->
    url = 'http://localhost:52204/api/v1/buildings/:id'
    parameters =
      id: '@BuildingId'
    # Return resource to provide high-level behaviours without the need to interact with the low level $http service.
    $resource(url, parameters)
]
