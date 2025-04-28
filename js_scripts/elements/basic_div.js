import Div from './div_element.js'

const id_for_element = 'element_id_'
let i = 0

export function main_div_for_page() {
	const id = id_for_element + i
	const name = 'div_' + i

	const div = new Div(name, id)

	i++

	return div
}
