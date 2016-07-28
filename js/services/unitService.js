app.factory('unitService', ['$resource', function($resource) {

  var unitResource = $resource('http://localhost:52204/api/v1/units/:id', {
    id: '@unitId'
  }, {
    query: {
      method: 'GET'
    }
  });

  return {
    getunits: function(callback){
      unitResource.query().$promise.then(callback);
    },
    getunit: function(unitId, callback){
      unitResource.get({unitId: unitId}).$promise.then(callback);
    }
  };

}]);
