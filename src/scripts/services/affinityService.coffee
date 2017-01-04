# Fetches Affinity data from the backend.
app.factory 'affinityService', [
  '$resource'
  ($resource) ->
    url = 'http://localhost:52204/api/v1/affinities/:id'
    parameters =
      id: '@AffinityId'
    # Return resource to provide high-level behaviours without the need to interact with the low level $http service.
    $resource(url, parameters)
]
