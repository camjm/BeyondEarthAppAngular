app.factory('factionService', ['$resource', function($resource) {

  var factionResource = $resource('http://localhost:52204/api/v1/factions/:id', {
    id: '@factionId'
  }, {
    query: {
      method: 'GET'
    }
  });

  return {
    getFactions: function(callback){
      factionResource.query().$promise.then(callback);
    },
    getFaction: function(factionId, callback){
      factionResource.get({factionId: factionId}).$promise.then(callback);
    }
  };

}]);
