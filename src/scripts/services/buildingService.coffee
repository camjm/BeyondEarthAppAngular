app.factory 'buildingService', [
  '$resource'
  ($resource) ->
    buildingResource = $resource('http://localhost:52204/api/v1/buildings/:id', { id: '@buildingId' }, query: method: 'GET')
    {
      getBuildings: (callback) ->
        buildingResource.query().$promise.then callback
        return
      getBuilding: (buildingId, callback) ->
        buildingResource.get(buildingId: buildingId).$promise.then callback
        return

    }
]
