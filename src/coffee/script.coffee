window.onload = ->
	buttons = document.querySelectorAll 'button'
	buttons.forEach (btn) ->
		btn.addEventListener 'click', ->
			alert "This is a #{@innerHTML} button."
