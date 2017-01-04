# Fetches Unit data from the backend.
app.factory 'unitService', [
  '$resource'
  ($resource) ->
    url = 'http://localhost:52204/api/v1/units/:id'
    parameters =
      id: '@UnitId'
    # Return resource to provide high-level behaviours without the need to interact with the low level $http service.
    $resource(url, parameters)
]
