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

// Directives: bind new behaviour to HTML elements. When the application runs, AngularJS walks through each element looking for directives.
// Expressions: display data in the controller on the page. Objects use dot notation.
// Filters: format data in the view, using the pipe '|', symbol. Helps to separate the controller data from its presentation in the view.

# For example, when a user visits `/`, a view will be constructed by injecting `home.html` into the `<div ng-view>` element.
# Load the data upfront before controller initialisation, so the view will always be rendered with valid data.
# The controller will be initialised after all promises are resolved; the resolved data will be injected into the controller.
# If any promise is rejected, the $routeChangeError event will be fired, the route won't change, and the controller won't be initialised.
# The promise is resolved withe the data from the parent object (i.e. the object the is returned synchronously be .get())
# If the user visits any other url just redirect to `/`
