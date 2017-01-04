# Fetches Technology data from the backend.
app.factory 'technologyService', [
  '$resource'
  ($resource) ->
    url = 'http://localhost:52204/api/v1/technologies/:id'
    parameters =
      id: '@TechnologyId'
    # Return resource to provide high-level behaviours without the need to interact with the low level $http service.
    $resource(url, parameters)
]
