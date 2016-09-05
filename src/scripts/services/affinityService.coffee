app.factory 'affinityService', [
  '$resource'
  ($resource) ->
    affinityResource = $resource('http://localhost:52204/api/v1/affinities/:id', { id: '@affinityId' }, query: method: 'GET')
    {
      getAffinities: (callback) ->
        affinityResource.query().$promise.then callback
        return
      getAffinity: (affinityId, callback) ->
        affinityResource.get(affinityId: affinityId).$promise.then callback
        return

    }
]
