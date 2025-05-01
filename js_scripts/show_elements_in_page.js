import PagesData from './data/page_data.js'
import { ElementData } from './data/element_data.js'
import { changeActiveElement } from './element_manager.js'
import { ElementTags } from './data/enums.js'

export function printCurrentPageElements() {
	const div = document.getElementById('page')
	const page = PagesData.pages[PagesData.activePage]

	if (div) {
		div.innerHTML = ''

		const children = creatChildrenForPage(page.children)

		for (let child of children) {
			div.appendChild(child)
		}
	}
}

function creatChildrenForPage(children) {
	const children_element = []

	for (let child of children) {
		const ele = document.createElement(child.tagName)
		ele.id = child.id
		ele.innerText = child.innerText

		// before adding in this function add attributes here and move to function
		// because here you can see attributes correctly
		specificAttributesForElements(ele, child)

		if (ElementData.activeElementId == child.id) {
			ele.classList.add('outlined')
		}

		for (let c in child.classes) {
			ele.appendChild(c)
		}

		ele.addEventListener('click', e => {
			e.stopPropagation() // 🛑 Stops it from reaching parent
			changeActiveElement(child.id)
		})

		if (child.can_have_children) {
			const internal_children = creatChildrenForPage(child.children)

			for (let internal_child of internal_children) {
				ele.appendChild(internal_child)
			}
		}

		children_element.push(ele)
	}

	return children_element
}

function specificAttributesForElements(ele, child) {
	if (child.tagName == ElementTags.INPUT) {
		ele.type = child.type
		ele.placeholder = child.placeholder
		ele.defaultValue = child.defaultValue
		ele.min = child.min
		ele.max = child.max
		ele.readonly = child.readonly
		ele.disabled = child.disabled
		ele.autocomplete = child.autocomplete
	}

	return ele
}
