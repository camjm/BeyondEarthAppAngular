# Fetches Unit data from the backend.
angular.module('beyondEarthApp').factory 'Unit', [
  '$resource'
  ($resource) ->
    url = 'http://localhost:8080/data/units/:id.json'
    parameters =
      id: '@UnitId'
    # Return resource to provide high-level behaviours without the need to interact with the low level $http service.
    $resource(url, parameters)
]
