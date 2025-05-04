import { ElementTags } from './data/enums.js'
import { ElementData } from './data/element_data.js'
import { addElementInsideElement } from './add_element_to_element.js'

const availableElementForAddingToOtherElement = {
	DIV: [ElementTags.DIV, ElementTags.BUTTON, ElementTags.INPUT, ElementTags.SELECT, ElementTags.TEXT],
	BUTTON: [],
	INPUT: [],
	SELECT: [ElementTags.OPTION],
	TEXT: [],
	OPTION: [ElementTags.TEXT],
	PAGE: [ElementTags.DIV],
}

export function showAvailableElements() {
	const ele = document.getElementById('elements_div')

	if (ele) {
		ele.innerHTML = ''
		const activeElement = document.getElementById(ElementData.activeElementId)
		if (activeElement) {
			let activeElementTagName = getKeyForChildrenUsingTagName(activeElement.tagName)

			for (let element of availableElementForAddingToOtherElement[activeElementTagName]) {
				const e = document.createElement('button')
				e.innerText = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
				e.classList.add('btn')
				e.addEventListener('click', () => addElementInsideElement(element))
				ele.appendChild(e)
			}
		}
	}
}

function getKeyForChildrenUsingTagName(tagName) {
	if (ElementData.activeElementId == 'page') {
		return 'PAGE'
	} else if (tagName == 'P' || tagName == 'H1' || tagName == 'H2' || tagName == 'H3' || tagName == 'H4' || tagName == 'H5' || tagName == 'A') {
		return 'TEXT'
	} else {
		return tagName
	}
}
