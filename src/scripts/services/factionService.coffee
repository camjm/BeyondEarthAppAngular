app.factory 'factionService', [
  '$resource'
  ($resource) ->
    factionResource = $resource('http://localhost:52204/api/v1/factions/:id', { id: '@factionId' }, query: method: 'GET')
    {
      getFactions: (callback) ->
        factionResource.query().$promise.then callback
        return
      getFaction: (factionId, callback) ->
        factionResource.get(factionId: factionId).$promise.then callback
        return

    }
]
