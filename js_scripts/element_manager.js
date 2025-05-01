import { ElementData } from './data/element_data.js'
import { showAvailableElements } from './show_elements_to_add.js'
import { printCurrentPageHierarchy } from './show_elements_hierarchy.js'
import { printCurrentPageElements } from './show_elements_in_page.js'
import { reprintEveryThing } from './main.js'

// change active element and add outline on active element
export function changeActiveElement(id) {
	if (id == ElementData.activeElementId) return

	ElementData.activeElementId = id

	showAvailableElements()
	printCurrentPageHierarchy()
	printCurrentPageElements()
}
// document.getElementById('page').addEventListener('click', changeActiveElement)

function resetActiveElement() {
	ElementData.activeElementId = ''

	reprintEveryThing()
}
document.getElementById('hierarchy_div').addEventListener('dblclick', resetActiveElement)
