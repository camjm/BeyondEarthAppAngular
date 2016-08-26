app.factory('unitService', ['$resource', function($resource) {

    // Create resource object to interact with RESTful server-sdie data source (backend).
    // This provides high-level behaviours without the need to interact with the low level $http service.
    var unitResource = $resource('http://localhost:52204/api/v1/units/:id', {
        id: '@UnitId' // defines id when using instance (not class) methods by specifying the property to use as id
    }, {
        query: {    // our query does not return an array - have to override defaults
            method: 'GET'
        },
        update: {
            method: 'PUT'
        }
    });

    return unitResource;
    // you can create a new instance with var unit = new unitResource();
    // and save it: unitResource.save(unit, function() {});     -- class method
    // or: unit.$save(function(){});                            -- instance method

    // updating:
    // var unit = unitResource.get({id: 4}, function() {
        // unit.name = 'New Name';
        //unit.$update(function(){
            // success handler
        //});
    //});

    function errorHandler(httpResponse) {
        console.log(httpResponse);
    }

    return {
        // GET methods are available on the class
        getUnits: function(callback) {
            return unitResource.query(callback);
        },
        getUnit: function(unitId, callback) {
            // returns an empty object which is populated automatically when the actual data comes from the server
            return unitResource.get({id: unitId}, callback);
        },
        // all non GET methods are aailable on instances (prefixed with '$')
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
