import { ElementData } from '../../data/element_data.js'
import PagesData from '../../data/page_data.js'

const elementNameInput = document.getElementById('element_name_property_input')

export default function elementName() {
	elementNameInput.addEventListener('input', e => changeElementName(e))
	elementNameInput.addEventListener('focusout', () => saveElementName())
}

function changeElementName(e) {
	const ele = document.getElementById(`${ElementData.activeElementId}_hierarchy`)

	if (ele) {
		const p = ele.getElementsByTagName('p')[0]
		p.innerText = e.target.value
		ElementData.name = e.target.value
	}
}

function saveElementName(children) {
	if (children == null || children == undefined) {
		children = PagesData.pages[PagesData.activePage].children
	}

	for (let i = 0; i < children.length; i++) {
		const child = children[i]

		if (child.id == ElementData.activeElementId) {
			child.name = ElementData.name

			return true
		}

		if (child.can_have_children) {
			if (saveElementName(child.children)) {
				return true
			}
		}
	}

	return false
}
