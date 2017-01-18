#Directives help Readability (expressive HTML that abstract the app's behaviour) and Reusability (self-contained units of functionality to avoid repetition)
# This directive teaches the browser a new, self-contained, interactive HTML element: <game-info>
angular.module('beyondEarthApp').directive 'gameInfo', ->
  {
    restrict: 'E'
    scope: info: '='
    templateUrl: 'app/shared/gameInfo/gameInfo.html'
    link: (scope, element, attrs) -> # used to create interactive directives that respond to user actions

      # scope: the directive's scope ('info' will be a property on this object) and new properties can be added for use in the template
      # element: refers to the directive's HTML element
      # attrs: contains the element's attributes
      scope.incrementCity = (adjustment) ->
        scope.info.cityCount += adjustment
        return

      scope.incrementTechnology = (adjustment) ->
        scope.info.technologyCount += adjustment
        return

      scope.incrementPurity = (adjustment) ->
        scope.info.affinities.purity += adjustment
        return

      scope.incrementSupremacy = (adjustment) ->
        scope.info.affinities.supremacy += adjustment
        return

      scope.incrementHarmony = (adjustment) ->
        scope.info.affinities.harmony += adjustment
        return

      return

  }
