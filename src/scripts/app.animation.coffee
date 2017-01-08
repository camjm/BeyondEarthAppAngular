# Animation
###
angular.module('beyondEarthApp').animation '.phone', ->

  animateIn = (element, className, done) ->

    if className != 'selected'
      return

    element.css(
      block: 'block'
      position: 'absolute'
      top: 500
      left: 0
    ).animate { top: 0 }, done

    # Return animateInEnd function
    (wasCancelled) ->
      if wasCancelled
        element.stop()
      return

  animateOut = (element, className, done) ->

    if className != 'selected'
      return

    element.css(
      position: 'absolute'
      top: 0
      left: 0
    ).animate { top: -500 }, done

    # Return animateOutEnd function
    (wasCancelled) ->
      if wasCancelled
        element.stop()
      return

  {
    addClass: animateIn
    removeClass: animateOut
  }
###
