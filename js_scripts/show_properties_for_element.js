import { Properties, PropertiesSectionIDs } from './data/enums.js'
import { ElementData } from './data/element_data.js'
import { getKeyForChildrenUsingTagName } from './show_elements_to_add.js'

const availablePropertiesForElements = {
	DIV: [Properties.TRANSFORM, Properties.APPEARANCE, Properties.TEXTALIGN, Properties.SLEFALIGN],
	BUTTON: [Properties.TRANSFORM, Properties.APPEARANCE, Properties.FONT, Properties.TEXTALIGN, Properties.I_TEXT],
	INPUT: [
		Properties.TRANSFORM,
		Properties.APPEARANCE,
		Properties.FONT,
		Properties.TEXT,
		Properties.TEXTALIGN,
		Properties.I_PLACEHOLDER,
		Properties.I_MIN,
		Properties.I_MAX,
		Properties.I_INPUT_TYPE,
	],
	SELECT: [Properties.TRANSFORM, Properties.APPEARANCE, Properties.FONT, Properties.TEXT, Properties.TEXTALIGN],
	TEXT: [
		Properties.TRANSFORM,
		Properties.APPEARANCE,
		Properties.TEXT,
		Properties.FONT,
		Properties.TEXTALIGN,
		Properties.SLEFALIGN,
		Properties.I_TEXT,
	],
	OPTION: [Properties.I_TEXT],
	PAGE: [Properties.PAGE],
}

export default function showAvailableProperties() {
	hideAllProperties()

	const activeElement = document.getElementById(ElementData.activeElementId)

	if (activeElement) {
		const individual_property_section = document.getElementById('individual_section')
		if (ElementData.activeElementId == 'page') {
			individual_property_section.style.display = 'none'
		} else {
			individual_property_section.style.display = ''
		}

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
