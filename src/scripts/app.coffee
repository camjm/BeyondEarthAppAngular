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

# Routes
# ------
# Routes are a way to manage apps containing more views. Templates are views that display different pieces of data, based on the URL the user is visiting.
app.config ($routeProvider) ->
    # Use `$routeProvider` to define application routes. When links are clicked, the page doesn't fully reload, only the view (specified by the `ng-view` attribute) changes.
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
