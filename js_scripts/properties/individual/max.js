import { ElementData } from '../../data/element_data.js'
import PagesData from '../../data/page_data.js'

const minInput = document.getElementById('max_property_input')

export default function max() {
	minInput.addEventListener('input', e => changeMax(e))
	minInput.addEventListener('focusout', () => saveMax())
}

function changeMax(e) {
	const ele = document.getElementById(ElementData.activeElementId)

	if (ele) {
		ele.max = e.target.value
		ElementData.max = e.target.value
	}
}

function saveMax(children) {
	if (children == null || children == undefined) {
		children = PagesData.pages[PagesData.activePage].children
	}

	for (let i = 0; i < children.length; i++) {
		const child = children[i]

		if (child.id == ElementData.activeElementId && Object.hasOwn(child, 'max')) {
			child.max = ElementData.max
			return true
		}

		if (child.can_have_children) {
			if (saveMax(child.children)) {
				return true
			}
		}
	}

	return false
}
