app.factory('buildingService', ['$resource', function($resource) {

  var buildingResource = $resource('http://localhost:52204/api/v1/buildings/:id', {
    id: '@buildingId'
  }, {
    query: {
      method: 'GET'
    }
  });

  return {
    getBuildings: function(callback){
      buildingResource.query().$promise.then(callback);
    },
    getBuilding: function(buildingId, callback){
      buildingResource.get({buildingId: buildingId}).$promise.then(callback);
    }
  };

}]);
