app.factory('unitService', ['$resource', function($resource) {

    var unitResource = $resource('http://localhost:52204/api/v1/units/:id', {
        id: '@unitId'
    }, {
        query: {
            method: 'GET'
        }
    });

    return {
        getUnits: function(callback) {
            unitResource.query().$promise.then(callback);
        },
        getUnit: function(unitId, callback) {
            unitResource.get({
                id: unitId
            }).$promise.then(callback);
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
