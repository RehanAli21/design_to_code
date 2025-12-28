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
		ElementData.name = newActiveElementData.name
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
		ElementData.name = ''
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
				name: child.name ? child.name : '',
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

export function getElementById(id, children) {
	for (let i = 0; i < children.length; i++) {
		const child = children[i]

		if (child.id === id) {
			return structuredClone(child) // ✅ no reference at all
		}

		if (child.can_have_children) {
			const found = getElementById(id, child.children)
			if (found) return found
		}
	}
	return null
}

function regenerateIds(element) {
	element.id = `${element.id}c`

	if (element.can_have_children && element.children) {
		element.children.forEach(child => regenerateIds(child))
	}

	return element
}
// params
// elementToAdd: element got from hierarchy
// parentId: element id in which you want to put this element as child
// children of page data, to find only in active page children
export function addAlreadyCreatedElementIntoElement(elementToAdd, parentId, children) {
	for (let i = 0; i < children.length; i++) {
		const child = children[i]

		console.log(child.id, parentId)

		if (child.id === parentId && child.can_have_children) {
			child.children.push(elementToAdd)
			return true
		}

		if (child.can_have_children) {
			const found = addAlreadyCreatedElementIntoElement(elementToAdd, parentId, child.children)
			if (found) return found
		}
	}
	return false
}

//For hidding the menu
document.addEventListener('click', e => {
	const ele = document.getElementById('right_click_menu')

	if (ele) {
		ele.style.display = 'none'

		localStorage.removeItem('right_click_select_item_id')
	}
})

const copyElement = document.getElementById('copy_element')

if (copyElement) {
	copyElement.addEventListener('click', () => {
		const copiedElementId = localStorage.getItem('right_click_select_item_id')

		if (copiedElementId) localStorage.setItem('copied_element_id', copiedElementId)
	})
}

const pasteElement = document.getElementById('paste_element')

if (pasteElement) {
	pasteElement.addEventListener('click', () => {
		let copiedElementId = localStorage.getItem('copied_element_id')

		let pasteIntoElmentId = localStorage.getItem('right_click_select_item_id')

		if (!copiedElementId || !pasteIntoElmentId) return

		copiedElementId = copiedElementId.replace('point_', '')

		pasteIntoElmentId = pasteIntoElmentId.replace('point_', '')

		console.log(`copy element with id ${copiedElementId}`)
		console.log(`paste in element with id ${pasteIntoElmentId}`)

		const pageChildren = PagesData.pages[PagesData.activePage].children

		const element = getElementById(copiedElementId, pageChildren)

		regenerateIds(element)

		const res = addAlreadyCreatedElementIntoElement(element, pasteIntoElmentId, pageChildren)

		if (res) {
			localStorage.setItem('copied_element_id', `point_${copiedElementId}c`)
			reprintEveryThing()
		} else {
			console.log('error or id not match on copy paste the element')
		}
	})
}
