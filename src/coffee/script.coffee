window.onload = ->
	btnClickMe = document.querySelector "#btnClickMe"
	btnClickMe.addEventListener "click", ->
		alert "Hello GulpJS."