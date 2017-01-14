# Create a new module called 'beyondEarthApp'. A module contains the different components of an [AngularJS](https://angularjs.org/) app.
app = angular.module 'beyondEarthApp'

# HTTP
# ----
app.config [
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

# Global error handling
app.run [
  '$rootScope'
  '$location'
  ($rootScope, $location) ->
    $rootScope.$on '$routeChangeError', (event, current, previous, rejection) ->
      $location.path '/units/' #TODO: create '404' route
      return
    return
]

# Transition to `units` state when the app starts.
app.run [
  '$location'
  ($location) ->
    $location.path '/units/'
    return
]
