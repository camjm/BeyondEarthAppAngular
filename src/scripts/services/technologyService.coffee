app.factory 'technologyService', [
  '$resource'
  ($resource) ->
    technologyResource = $resource('http://localhost:52204/api/v1/technologies/:id', { id: '@technologyId' }, query: method: 'GET')
    {
      getTechnologies: (callback) ->
        technologyResource.query().$promise.then callback
        return
      getTechnology: (technologyId, callback) ->
        technologyResource.get(technologyId: technologyId).$promise.then callback
        return

    }
]
