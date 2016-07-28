app.factory('technologyService', ['$resource', function($resource) {

  var technologyResource = $resource('http://localhost:52204/api/v1/technologies/:id', {
    id: '@technologyId'
  }, {
    query: {
      method: 'GET'
    }
  });

  return {
    getTechnologies: function(callback){
      technologyResource.query().$promise.then(callback);
    },
    getTechnology: function(technologyId, callback){
      technologyResource.get({technologyId: technologyId}).$promise.then(callback);
    }
  };

}]);
