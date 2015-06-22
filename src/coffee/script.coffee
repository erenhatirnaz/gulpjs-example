window.onload = ->
	buttons = Array::slice.call(document.querySelectorAll "button")
	buttons.forEach (btn) ->
		btn.addEventListener "click", ->
			alert "This is a #{@innerHTML} button."