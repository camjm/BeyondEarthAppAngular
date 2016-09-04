# Create a new module called 'beyondEarthApp'. A module contains the different components of an AngularJS app.
app = angular.module('beyondEarthApp', [
  'ngRoute'
  'ngResource'
])

app.config [
  '$httpProvider'
  ($httpProvider) ->
    $httpProvider.defaults.headers.common['Authorization'] = 'Basic YmhvZ2c6aWdub3JlZA=='
    return
]

# Routes are a way to manage apps containing more views.
# Templates are views that display different pieces of data, based on the URL the user is visiting.
app.config ($routeProvider) ->
    # user $routeProvider to define application routes.
    $routeProvider  # When links are clicked, the page doesn't fully reload, only the view (specified by ng-view) changes.
        .when '/',     # when a user visits '/', a view will be constructed by injecting home.html into the <div ng-view> element
            controller: 'HomeController'
            templateUrl: 'views/home.html'
        .when '/games/:id',
            controller: 'GameController'
            templateUrl: 'views/game.html'
        # Unit states
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
        .otherwise     # if the user visits any other url just redirect to '/'
            redirectTo: '/'
    return

# make transition to 'units' state when the app starts
app.run ($location) ->
  $location.path '/units/'
  return
