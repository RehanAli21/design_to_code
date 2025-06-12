import { ElementData } from '../../data/element_data.js'
import PagesData from '../../data/page_data.js'

const minInput = document.getElementById('min_property_input')

export default function min() {
	minInput.addEventListener('input', e => changePlaceholder(e))
	minInput.addEventListener('focusout', () => saveMin())
}

function changePlaceholder(e) {
	const ele = document.getElementById(ElementData.activeElementId)

	if (ele) {
		ele.min = e.target.value
		ElementData.min = e.target.value
	}
}

function saveMin(children) {
	if (children == null || children == undefined) {
		children = PagesData.pages[PagesData.activePage].children
	}

	for (let i = 0; i < children.length; i++) {
		const child = children[i]

		if (child.id == ElementData.activeElementId && Object.hasOwn(child, 'min')) {
			child.min = ElementData.min
			return true
		}

		if (child.can_have_children) {
			if (saveMin(child.children)) {
				return true
			}
		}
	}

	return false
}
