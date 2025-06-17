import { ElementData } from './data/element_data.js'
import { showAvailableElements } from './show_elements_to_add.js'
import { printCurrentPageHierarchy } from './show_elements_hierarchy.js'
import { printCurrentPageElements } from './show_elements_in_page.js'
import { reprintEveryThing } from './main.js'
import PagesData from './data/page_data.js'
import mainUpdatePropertiesFunc from './updatePropertyInUI/updateProperties.js'
import showAvailableProperties from './show_properties_for_element.js'
import { InputTypes } from './data/enums.js'

// change active element and add outline on active element
export function changeActiveElement(id) {
	if (id == ElementData.activeElementId) return

	ElementData.activeElementId = id

	const newActiveElementData = getDataFromActiveElement(id, PagesData.pages[PagesData.activePage].children)

	if (newActiveElementData) {
		ElementData.styles = newActiveElementData.styles
		ElementData.innerText = newActiveElementData.innerText
		ElementData.placeholder = newActiveElementData.placeholder
		ElementData.inputType = newActiveElementData.inputType
		ElementData.min = newActiveElementData.min
		ElementData.max = newActiveElementData.max
	} else {
		ElementData.styles = {
			xsmall: {},
			small: {},
			medium: {},
			large: {},
			xLarge: {},
		}
		ElementData.innerText = ''
		ElementData.placeholder = ''
		ElementData.inputType = InputTypes.TEXT
		ElementData.min = null
		ElementData.max = null
	}

	showAvailableElements()
	printCurrentPageHierarchy()
	printCurrentPageElements()
	mainUpdatePropertiesFunc()
	showAvailableProperties()
}

function getDataFromActiveElement(id, children) {
	for (let i = 0; i < children.length; i++) {
		const child = children[i]

		if (child.id == id) {
			const attributes = {
				styles: child.styles,
				innerText: child.innerText,
				placeholder: child.placeholder ? child.placeholder : '',
				inputType: child.inputType ? child.inputType : InputTypes.TEXT,
				min: child.min ? child.min : null,
				max: child.max ? child.max : null,
			}
			return attributes
		}

		if (child.can_have_children) {
			const newActiveElementStyles = getDataFromActiveElement(id, child.children)

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

export function deleteElement(id) {
	PagesData.pages[PagesData.activePage].children = deleteElementHelper(id, PagesData.pages[PagesData.activePage].children)

	if (ElementData.activeElementId == id) {
		changeActiveElement('')
	} else {
		printCurrentPageHierarchy()
		printCurrentPageElements()
	}
}

function deleteElementHelper(id, children) {
	const newChildren = []
	for (let i = 0; i < children.length; i++) {
		const child = children[i]

		if (child.id != id) {
			newChildren.push(child)
		}

		if (child.can_have_children) {
			child.children = deleteElementHelper(id, child.children)
		}
	}

	return newChildren
}
