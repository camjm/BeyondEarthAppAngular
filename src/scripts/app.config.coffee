# Create a new module called 'beyondEarthApp'. A module contains the different components of an [AngularJS](https://angularjs.org/) app.
app = angular.module 'beyondEarthApp', [
  'ngRoute'
  #'ngAnimate'
  'ngResource'
]

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
      query:
        method: 'GET'
        cancellable: true
      get:
        method: 'GET'
        cancellable: true
      # No PUT method by default.
      update: method: 'PUT'
]

# Locations
# ---------
# The Location service parses the URL in the address bar (`window.location`) to make available to the application.
# There is a 2-way binding so changes to the address bar will show in `$location`, and vice versa.
# It exposes jQuery-like getters and setters for URL parts: protocol, host, port, path, search, hash
app.config [
  '$locationProvider',
  ($locationProvider) ->
    $locationProvider.hashPrefix '!'
]

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
        # Load the data upfront before controller initialisation, so the view will always be rendered with valid data.
        # The controller will be initialised after all promises are resolved; the resolved data will be injected into the controller.
        # If any promise is rejected, the $routeChangeError event will be fired, the route won't change, and the controller won't be initialised.
        .when '/',
            controller: 'HomeController'
            templateUrl: 'views/home.html'
        # Game routes
        .when '/games/',
            controller: 'GameListController'
            templateUrl: 'views/game/game-list.html'
        .when '/games/:id/view',
            controller: 'GameViewController'
            templateUrl: 'views/game/game-view.html'
        # Unit routes
        .when '/units/',
            controller: 'UnitListController'
            templateUrl: 'views/unit/unit-list.html'
            resolve:
              units: (Unit) => Unit.query().$promise
        .when '/units/:id/view',
            controller: 'UnitViewController'
            templateUrl: 'views/unit/unit-view.html'
            resolve:
              unit: (Unit, $route) => Unit.get(id: $route.current.params.id).$promise
        .when '/units/:id/edit',
            controller: 'UnitEditController'
            templateUrl: 'views/unit/unit-edit.html'
            resolve:
              unit: (Unit, $route) => Unit.get(id:$route.current.params.id).$promise
        .when '/units/new',
            controller: 'UnitAddController'
            templateUrl: 'views/unit/unit-add.html'
        # If the user visits any other url just redirect to `/`
        .otherwise
            redirectTo: '/'
    return
]

# Transition to `units` state when the app starts.
app.run ($location) ->
  $location.path '/units/'
  return
