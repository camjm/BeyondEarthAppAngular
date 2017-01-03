# Fetches Building data from the backend.
# Abstracts the communication logic into a standalone service, so controllers don't get code-bloat or need to manage promises.
# `factory()` is used to create re-usable services.
app.factory 'buildingService', [
  '$resource'
  ($resource) ->
    url = 'http://localhost:52204/api/v1/buildings/:id'
    parameters =
      id: '@BuildingId'
    actions =
      # The API doesn't return an array, so override the default.
      query: method: 'GET'
      # No PUT method by default.
      update: method: 'PUT'
    # Resource
    # --------
    # Create and return the resource object to cleanly and simply interact with RESTful server-side data source.
    # This provides high-level behaviours without the need to interact with the low level $http service.
    $resource(url, parameters, actions)
]

# Usage
# -----
# Use the resource class methods for read operations.
# GET: `$scope.resources = resourceService.query({pageNumber: 1, pageSize: 5});`
# GET: `$scope.resource = resourceService.get({id: 1});`
# Create a new instance of the resource: `new resourceService();`
# Use the resource instance methods for write operations.
# DELETE: `$scope.resource.$delete(function() {});`
# POST: `$scope.resource.$save(function() {});`
# PUT: `$scope.resource.$update(function() {});`
