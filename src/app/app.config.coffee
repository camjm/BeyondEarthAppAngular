# HTTP
# ----
# Configure the core Angular $http service that comunicates with remote HTTP servers.
angular.module('beyondEarthApp').config [
  '$httpProvider'
  ($httpProvider) ->
    # Temporary configuration hack.
    $httpProvider.defaults.headers.common.Authorization = 'Basic YmhvZ2c6aWdub3JlZA=='
    return
]

# Resources
# ---------
# Resources abstracts the communication logic into a standalone service, so controllers don't get code-bloat or need to manage promises.
# Resources provide a clean and simple way to interact with RESTful server-side data source.
angular.module('beyondEarthApp').config [
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
    return
]

# Locations
# ---------
# The Location service parses the URL in the address bar (`window.location`) to make available to the application.
# There is a 2-way binding so changes to the address bar will show in `$location`, and vice versa.
# It exposes jQuery-like getters and setters for URL parts: protocol, host, port, path, search, hash
angular.module('beyondEarthApp').config [
  '$locationProvider',
  ($locationProvider) ->
    $locationProvider.hashPrefix '!'
    return
]

# Routes
# ------
# Routes are a way to manage apps containing more views.
# Templates are views that display different pieces of data, based on the URL the user is visiting.
# When links are clicked, the page doesn't fully reload, only the view (specified by the `ng-view` attribute) changes.
angular.module('beyondEarthApp').config [
  '$routeProvider'
  ($routeProvider) ->
    $routeProvider
        .otherwise
            redirectTo: '/'
    return
]

# Global error handling
angular.module('beyondEarthApp').run [
  '$rootScope'
  '$location'
  ($rootScope, $location) ->
    $rootScope.$on '$routeChangeError', (event, current, previous, rejection) ->
      $location.path '/units/' #TODO: create '404' route
      return
    return
]

# Transition to `units` state when the app starts.
angular.module('beyondEarthApp').run [
  '$location'
  ($location) ->
    $location.path '/units/'
    return
]
