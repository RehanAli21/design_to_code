import { ElementData } from '../../data/element_data.js'
import { InputTypes } from '../../data/enums.js'
import PagesData from '../../data/page_data.js'

const inputTypeSelect = document.getElementById('input_type_property_select')

export default function inputType() {
	inputTypeSelect.addEventListener('input', e => changeInputType(e))
	inputTypeSelect.addEventListener('focusout', () => saveInputType())
}

function changeInputType(e) {
	const ele = document.getElementById(ElementData.activeElementId)

	if (ele) {
		ele.type = e.target.value
		ElementData.inputType = InputTypes[e.target.value]
	}
}

function saveInputType(children) {
	if (children == null || children == undefined) {
		children = PagesData.pages[PagesData.activePage].children
	}

	for (let i = 0; i < children.length; i++) {
		const child = children[i]

		if (child.id == ElementData.activeElementId && child.type) {
			child.type = ElementData.inputType
			return true
		}

		if (child.can_have_children) {
			if (saveInputType(child.children)) {
				return true
			}
		}
	}

	return false
}
