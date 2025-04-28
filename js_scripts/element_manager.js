import { ElementData } from './data/element_data.js'
import { showAvailableElements } from './show_elements_to_add.js'
import { printCurrentPageHierarchy } from './show_elements_hierarchy.js'
import { printCurrentPageElements } from './show_elements_in_page.js'
import { reprintEveryThing } from './main.js'

let prevActiveElementId = ''

// change active element and add outline on active element
export function changeActiveElement(id) {
	if (id == prevActiveElementId) return

	const element = document.getElementById(id)

	if (element) {
		element.classList.add('outlined')
	}

	const prevElement = document.getElementById(prevActiveElementId)

	if (prevElement) {
		element.classList.remove('outlined')
	}

	prevActiveElementId = id
	ElementData.activeElementId = id

	showAvailableElements()
	printCurrentPageHierarchy()
	printCurrentPageElements()
}
// document.getElementById('page').addEventListener('click', changeActiveElement)

function resetActiveElement() {
	const ele = document.getElementById(ElementData.activeElementId)

	if (ele) {
		ele.classList.remove('outlined')
	}

	ElementData.activeElementId = ''
	prevActiveElementId = ''

	reprintEveryThing()
}
document.getElementById('hierarchy_div').addEventListener('dblclick', resetActiveElement)
