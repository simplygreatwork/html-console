
let console_log = console.log

// console.log fails with a single line.

export function console_init(selector) {
	
	let console = { selector: selector }
	console.log = function(message) {
		console_log_terminal(console, message)
		console_log_browser(console, message)
	}
	return console
}

export function console_log_terminal(printer, string) {
	
	let array = string.split('\n')
	let delta = array[1].length - array[1].trimLeft().length
	string = array.map(function(each) {
		return each.slice(delta)
	}).join('\n')
	string = string.replaceAll('\t', '  ')
	console_log(string)
}

export function console_log_browser(printer, string) {
	
	let array = string.split('\n')
	let delta = array[1].length - array[1].trimLeft().length
	string = array.map(function(each) {
		return each.slice(delta)
	}).join('\n')	
		
	var div = document.createElement('div')
	div.style.cssText = 'font-family:mono;font-size:75%'
	string = string.replaceAll(' ', '&nbsp;')
	string = string.replaceAll('\n', '<br>')
	string = string.replaceAll('\t', '&nbsp;&nbsp;')
	div.innerHTML = string
	document.querySelector(printer.selector).appendChild(div)
}



