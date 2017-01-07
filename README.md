# Beyond Earth App Angular

## Resource Usage

Use the resource class methods for read operations.
GET: `$scope.resources = resourceService.query({pageNumber: 1, pageSize: 5});`
GET: `$scope.resource = resourceService.get({id: 1});`
Create a new instance of the resource: `new resourceService();`
Use the resource instance methods for write operations.
DELETE: `$scope.resource.$delete(function() {});`
POST: `$scope.resource.$save(function() {});`
PUT: `$scope.resource.$update(function() {});`
