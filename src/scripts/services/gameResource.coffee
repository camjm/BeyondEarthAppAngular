# Fetches Game data from the backend.
angular.module('beyondEarthApp').factory 'Game', [
  '$resource'
  ($resource) ->
    url = 'http://localhost:52204/api/v1/games/:id'
    parameters =
      id: '@GameId'
    # Return resource to provide high-level behaviours without the need to interact with the low level $http service.
    $resource(url, parameters)
]
