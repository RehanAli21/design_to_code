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
}

export function showAvailableElements() {
	const ele = document.getElementById('elements_div')

	if (ele) {
		ele.innerHTML = ''
		const activeElement = document.getElementById(ElementData.activeElementId)
		if (activeElement) {
			for (let element of availableElementForAddingToOtherElement[activeElement.tagName]) {
				const e = document.createElement('button')
				e.innerText = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
				e.classList.add('btn')
				e.addEventListener('click', () => addElementInsideElement(element))
				ele.appendChild(e)
			}
		}
	}
}
