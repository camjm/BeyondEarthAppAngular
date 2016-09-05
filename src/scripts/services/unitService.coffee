app.factory 'unitService', [
  '$resource'
  ($resource) ->
    # Create resource object to interact with RESTful server-sdie data source (backend).
    # This provides high-level behaviours without the need to interact with the low level $http service.
    unitResource = $resource('http://localhost:52204/api/v1/units/:id', { id: '@UnitId' },
      query: method: 'GET'
      update: method: 'PUT')
    # you can create a new instance with var unit = new unitResource();
    # and save it: unitResource.save(unit, function() {});     -- class method
    # or: unit.$save(function(){});                            -- instance method
    # updating:
    # var unit = unitResource.get({id: 4}, function() {
    # unit.name = 'New Name';
    #unit.$update(function(){
    # success handler
    #});
    #});

    errorHandler = (httpResponse) ->
      console.log httpResponse
      return

    return unitResource
    {
      getUnits: (callback) ->
        unitResource.query callback
      getUnit: (unitId, callback) ->
        # returns an empty object which is populated automatically when the actual data comes from the server
        unitResource.get { id: unitId }, callback
      createUnit: (unit, callback) ->
        # should use instance methods (unit.$save) instead of class methods?
        unitResource.save null, unit, callback
        # is the null required?
        return
      updateUnit: (unitId, unit, callback) ->
        unitResource.update({ id: unitId }, unit).$promise.then callback
        return
      deleteUnit: (unitId, callback) ->
        unitResource.delete(id: unitId).$promise.then callback
        return

    }
]
