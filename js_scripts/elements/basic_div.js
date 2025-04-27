import Div from './div_element.js'

let i = 0

export function main_div_for_page() {
	const id = 'main_div_for_page' + i

	const div = new Div(id, id)

	i++

	return div
}
