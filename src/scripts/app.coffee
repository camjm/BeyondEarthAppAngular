# Create a new module called 'beyondEarthApp'. A module contains the different components of an [AngularJS](https://angularjs.org/) app.
app = angular.module('beyondEarthApp', [
  'ngRoute'
  'ngResource'
])

# Temporary configuration hack.
app.config [
  '$httpProvider'
  ($httpProvider) ->
    $httpProvider.defaults.headers.common.Authorization = 'Basic YmhvZ2c6aWdub3JlZA=='
    return
]

# Resources
# ---------
# Resources abstracts the communication logic into a standalone service, so controllers don't get code-bloat or need to manage promises.
# Resources provide a clean and simple way to interact with RESTful server-side data source.
app.config [
  '$resourceProvider'
  ($resourceProvider) ->
  $resourceProvider.defaults.actions =
    # The API doesn't return an array, so override the default.
    query: method: 'GET'
    # No PUT method by default.
    update: method: 'PUT'

# Resource Usage
# -----
# Use the resource class methods for read operations.
# GET: `$scope.resources = resourceService.query({pageNumber: 1, pageSize: 5});`
# GET: `$scope.resource = resourceService.get({id: 1});`
# Create a new instance of the resource: `new resourceService();`
# Use the resource instance methods for write operations.
# DELETE: `$scope.resource.$delete(function() {});`
# POST: `$scope.resource.$save(function() {});`
# PUT: `$scope.resource.$update(function() {});`

# Routes
# ------
# Routes are a way to manage apps containing more views.
# Templates are views that display different pieces of data, based on the URL the user is visiting.
app.config [
  '$routeProvider'
  ($routeProvider) ->
    # Use `$routeProvider` to define application routes.
    # When links are clicked, the page doesn't fully reload, only the view (specified by the `ng-view` attribute) changes.
    $routeProvider
        # For example, when a user visits `/`, a view will be constructed by injecting `home.html` into the `<div ng-view>` element.
        .when '/',
            controller: 'HomeController'
            templateUrl: 'views/home.html'
        .when '/games/:id',
            controller: 'GameController'
            templateUrl: 'views/game.html'
        .when '/units/',
            controller: 'UnitsController'
            templateUrl: 'views/units.html'
        .when '/units/:id/view',
            controller: 'UnitController'
            templateUrl: 'views/unit.html'
        .when '/units/:id/edit',
            controller: 'UnitEditController'
            templateUrl: 'views/unit-edit.html'
        .when '/units/new',
            controller: 'UnitCreateController'
            templateUrl: 'views/unit-add.html'
        # If the user visits any other url just redirect to `/`
        .otherwise
            redirectTo: '/'
    return

# Transition to `units` state when the app starts.
app.run ($location) ->
  $location.path '/units/'
  return
