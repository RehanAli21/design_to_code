import ElementData from './data/element_data.js'

let prevActiveElementId = ''

// change active element and add outline on active element
export function changeActiveElement(e) {
	if (e.target.id == prevActiveElementId) return

	const element = document.getElementById(e.target.id)

	if (element) {
		element.classList.add('outlined')
	}

	const prevElement = document.getElementById(prevActiveElementId)

	if (prevElement) {
		element.classList.remove('outlined')
	}

	prevActiveElementId = e.target.id
	ElementData.activeElementId = e.target.id
}
document.getElementById('page').addEventListener('click', changeActiveElement)
