angular.module('beyondEarthApp').config [
  '$routeProvider'
  ($routeProvider) ->
    $routeProvider
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
    return
]
