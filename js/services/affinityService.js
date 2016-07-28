app.factory('affinityService', ['$resource', function($resource) {

  var affinityResource = $resource('http://localhost:52204/api/v1/affinities/:id', {
    id: '@affinityId'
  }, {
    query: {
      method: 'GET'
    }
  });

  return {
    getAffinities: function(callback){
      affinityResource.query().$promise.then(callback);
    },
    getAffinity: function(affinityId, callback){
      affinityResource.get({affinityId: affinityId}).$promise.then(callback);
    }
  };

}]);
