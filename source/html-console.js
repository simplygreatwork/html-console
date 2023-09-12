
export function console_init(selector) {
	
	let console_log = console.log
	console.log = function() {
		console_log(...arguments)
		console_write(selector, ...arguments)
	}
}

function console_write(selector, message) {
	
	selector = selector || body
	var div = document.createElement('div')
	div.style.cssText = 'font-family:mono;font-size:75%'
	message = new String(message)
	message = message.replaceAll(' ', '&nbsp;')
	message = message.replaceAll('\n', '<br>')
	div.innerHTML = message
	document.querySelector(selector).appendChild(div)
}
