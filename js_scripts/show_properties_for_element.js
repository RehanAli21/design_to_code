import { Properties, PropertiesSectionIDs } from './data/enums.js'
import { ElementData } from './data/element_data.js'
import { getKeyForChildrenUsingTagName } from './show_elements_to_add.js'

const availablePropertiesForElements = {
	DIV: [Properties.TRANSFORM, Properties.APPEARANCE],
	BUTTON: [Properties.TRANSFORM, Properties.APPEARANCE, Properties.FONT],
	INPUT: [Properties.TRANSFORM, Properties.APPEARANCE, Properties.FONT],
	SELECT: [Properties.TRANSFORM, Properties.APPEARANCE],
	TEXT: [Properties.TRANSFORM, Properties.APPEARANCE, Properties.TEXT, Properties.FONT],
	OPTION: [Properties.TRANSFORM, Properties.APPEARANCE, Properties.FONT],
	PAGE: [Properties.PAGE],
}

export default function showAvailableProperties() {
	hideAllProperties()

	const activeElement = document.getElementById(ElementData.activeElementId)

	if (activeElement) {
		let activeElementTagName = getKeyForChildrenUsingTagName(activeElement.tagName)

		for (const element of availablePropertiesForElements[activeElementTagName]) {
			const section_id = PropertiesSectionIDs[element]

			const section_ele = document.getElementById(section_id)

			if (section_ele) {
				section_ele.style.display = ''
			}
		}
	}
}

function hideAllProperties() {
	for (const key in PropertiesSectionIDs) {
		if (Object.prototype.hasOwnProperty.call(PropertiesSectionIDs, key)) {
			const element = document.getElementById(PropertiesSectionIDs[key])

			if (element) {
				element.style.display = 'none'
			}
		}
	}
}
