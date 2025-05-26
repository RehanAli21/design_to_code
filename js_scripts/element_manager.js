import { ElementData } from './data/element_data.js'
import { showAvailableElements } from './show_elements_to_add.js'
import { printCurrentPageHierarchy } from './show_elements_hierarchy.js'
import { printCurrentPageElements } from './show_elements_in_page.js'
import { reprintEveryThing } from './main.js'
import PagesData from './data/page_data.js'
import mainUpdatePropertiesFunc from './updatePropertyInUI/updateProperties.js'
import showAvailableProperties from './show_properties_for_element.js'

// change active element and add outline on active element
export function changeActiveElement(id) {
	if (id == ElementData.activeElementId) return

	ElementData.activeElementId = id

	const newActiveElementStyles = getStylesForActiveElement(id, PagesData.pages[PagesData.activePage].children)

	if (newActiveElementStyles) {
		ElementData.styles = newActiveElementStyles
	} else {
		ElementData.styles = {
			xsmall: {},
			small: {},
			medium: {},
			large: {},
			xLarge: {},
		}
	}

	showAvailableElements()
	printCurrentPageHierarchy()
	printCurrentPageElements()
	mainUpdatePropertiesFunc()
	showAvailableProperties()
}

function getStylesForActiveElement(id, children) {
	for (let i = 0; i < children.length; i++) {
		const child = children[i]

		if (child.id == id) {
			return child.styles
		}

		if (child.can_have_children) {
			const newActiveElementStyles = getStylesForActiveElement(id, child.children)

			if (newActiveElementStyles) return newActiveElementStyles
		}
	}

	return null
}

function resetActiveElement() {
	ElementData.activeElementId = ''

	reprintEveryThing()
}
document.getElementById('hierarchy_div').addEventListener('dblclick', resetActiveElement)
