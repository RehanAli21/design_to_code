import { ElementData } from '../../data/element_data.js'
import PagesData from '../../data/page_data.js'

const placeholderInput = document.getElementById('placeholder_property_input')

export default function placeholder() {
	placeholderInput.addEventListener('input', e => changePlaceholder(e))
	placeholderInput.addEventListener('focusout', () => savePlaceholder())
}

function changePlaceholder(e) {
	const ele = document.getElementById(ElementData.activeElementId)

	if (ele) {
		ele.placeholder = e.target.value
		ElementData.placeholder = e.target.value
	}
}

function savePlaceholder(children) {
	if (children == null || children == undefined) {
		children = PagesData.pages[PagesData.activePage].children
	}

	for (let i = 0; i < children.length; i++) {
		const child = children[i]

		if (child.id == ElementData.activeElementId && child.placeholder) {
			child.placeholder = ElementData.placeholder
			return true
		}

		if (child.can_have_children) {
			if (savePlaceholder(child.children)) {
				return true
			}
		}
	}

	return false
}
