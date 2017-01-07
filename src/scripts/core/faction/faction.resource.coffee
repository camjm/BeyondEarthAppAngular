# Fetches Faction data from the backend.
angular.module('core.faction').factory 'Faction', [
  '$resource'
  ($resource) ->
    url = 'http://localhost:52204/api/v1/factions/:id'
    parameters =
      id: '@FactionId'
    # Return resource to provide high-level behaviours without the need to interact with the low level $http service.
    $resource(url, parameters)
]
