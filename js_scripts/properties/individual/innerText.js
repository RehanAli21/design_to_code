import { ElementData } from '../../data/element_data.js'
import PagesData from '../../data/page_data.js'

const innerTextArea = document.getElementById('text_property_textarea')

export default function innerText() {
	innerTextArea.addEventListener('input', e => changeInnerText(e))
	innerTextArea.addEventListener('focusout', () => saveInnerText())
}

function changeInnerText(e) {
	const ele = document.getElementById(ElementData.activeElementId)

	if (ele) {
		ele.innerText = e.target.value
		ElementData.innerText = e.target.value
	}
}

function saveInnerText(children) {
	if (children == null || children == undefined) {
		children = PagesData.pages[PagesData.activePage].children
	}

	for (let i = 0; i < children.length; i++) {
		const child = children[i]

		if (child.id == ElementData.activeElementId) {
			child.innerText = ElementData.innerText
			return true
		}

		if (child.can_have_children) {
			if (saveInnerText(child.children)) {
				return true
			}
		}
	}

	return false
}
