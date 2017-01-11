# Beyond Earth App Angular

## Resource Usage

Use the resource class methods for read (GET) operations:
```javascript
$scope.resources = resourceService.query({pageNumber: 1, pageSize: 5});
$scope.resource = resourceService.get({id: 1});
```

Create a new instance of the resource: 
```javascript
new resourceService();
```

Use the resource instance methods for write (DELETE, POST, PUT) operations:
```javascript
$scope.resource.$delete(function() {});
$scope.resource.$save(function() {});
$scope.resource.$update(function() {});
```
