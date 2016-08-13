app.factory('unitService', ['$resource', function($resource) {

    // Create resource object to interact with RESTful server-sdie data source.
    // This provides high-level behaviours without the need to interact with the low level $http service.
    var unitResource = $resource('http://localhost:52204/api/v1/units/:id', {
        id: '@unitId'
    }, {
        query: {
            method: 'GET'
        }
    });

    function errorHandler(httpResponse) {
        console.log(httpResponse);
    }

    return {
        getUnits: function(callback) {
            unitResource.query({}, callback, errorHandler);
        },
        getUnit: function(unitId, callback) {
            unitResource.get({
                id: unitId
            }, callback, errorHandler);
        },
        createUnit: function(unit, callback) {
            unitResource.save(null, unit).$promise.then(callback);
        },
        updateUnit: function(unitId, unit, callback) {
            unitResource.update({
                id: unitId
            }, unit).$promise.then(callback);
        },
        deleteUnit: function(unitId, callback) {
            unitResource.delete({
                id: unitId
            }).$promise.then(callback);
        }
    };

}]);
