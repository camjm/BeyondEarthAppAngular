# Routes
# ------
# Routes are a way to manage apps containing more views.
# Templates are views that display different pieces of data, based on the URL the user is visiting.
angular.module('beyondEarthApp').config [
  '$routeProvider'
  ($routeProvider) ->
    # Use `$routeProvider` to define application routes.
    # When links are clicked, the page doesn't fully reload, only the view (specified by the `ng-view` attribute) changes.
    $routeProvider
        # For example, when a user visits `/`, a view will be constructed by injecting `home.html` into the `<div ng-view>` element.
        # Load the data upfront before controller initialisation, so the view will always be rendered with valid data.
        # The controller will be initialised after all promises are resolved; the resolved data will be injected into the controller.
        # If any promise is rejected, the $routeChangeError event will be fired, the route won't change, and the controller won't be initialised.
        # The promise is resolved withe the data from the parent object (i.e. the object the is returned synchronously be .get())
        .when '/',
            controller: 'HomeController'
            templateUrl: 'app/components/home/home.html'
        # Game routes
        .when '/games/',
            controller: 'GameListController'
            templateUrl: 'app/components/game/views/game-list.html'
        .when '/games/:id/view',
            controller: 'GameViewController'
            templateUrl: 'app/components/game/views/game-view.html'
        # Unit routes
        .when '/units/',
            controller: 'UnitListController'
            templateUrl: 'app/components/unit/views/unit-list.html'
            resolve:
              units: (Unit) => Unit.query().$promise
        .when '/units/:id/view',
            controller: 'UnitViewController'
            templateUrl: 'app/components/unit/views/unit-view.html'
            resolve:
              unit: (Unit, $route) => Unit.get(id: $route.current.params.id).$promise
        .when '/units/:id/edit',
            controller: 'UnitEditController'
            templateUrl: 'app/components/unit/views/unit-edit.html'
            resolve:
              unit: (Unit, $route) => Unit.get(id:$route.current.params.id).$promise
        .when '/units/new',
            controller: 'UnitAddController'
            templateUrl: 'app/components/unit/views/unit-add.html'
        # If the user visits any other url just redirect to `/`
        .otherwise
            redirectTo: '/'
    return
]
