app.factory('unitService', ['$resource', function($resource) {

    // Create resource object to interact with RESTful server-sdie data source (backend).
    // This provides high-level behaviours without the need to interact with the low level $http service.
    var unitResource = $resource('http://localhost:52204/api/v1/units/:id', {
        id: '@unitId' // defines id when using instance (not class) methods by specifying the property to use as id
    }, {
        query: {    // our query does not return an array - have to override defaults
            method: 'GET'
        },
        update: {
            method: 'PUT'
        }
    });

    function errorHandler(httpResponse) {
        console.log(httpResponse);
    }

    return {
        getUnits: function(callback) {
            return unitResource.query(callback);
        },
        getUnit: function(unitId, callback) {
            // returns an empty object which is populated automatically when the actual data comes from the server
            return unitResource.get({id: unitId}, callback);
        },
        createUnit: function(unit, callback) {
            // should use instance methods (unit.$save) instead of class methods?
            unitResource.save(null, unit, callback); // is the null required?
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
