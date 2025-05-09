import { ElementData } from '../data/element_data.js'
import { PageModes } from '../data/enums.js'
import PagesData from '../data/page_data.js'
import { printCurrentPageElements } from '../show_elements_in_page.js'

export function saveDataIntoElement() {
	replaceStylesInPage(null)

	printCurrentPageElements()
}

function replaceStylesInPage(children) {
	if (children == null || children == undefined) {
		children = PagesData.pages[PagesData.activePage].children
	}

	for (let i = 0; i < children.length; i++) {
		const child = children[i]

		if (child.id == ElementData.activeElementId) {
			child.styles = ElementData.styles
			return true
		}

		if (child.can_have_children) {
			if (replaceStylesInPage(child.children)) {
				return true
			}
		}
	}

	return false
}

export function changeElementStyle(styleValue, propertyInput, propertySelect) {
	if (propertySelect && propertyInput) {
		const newPropertyValue = `${propertyInput.value}${propertySelect.value}`

		if (PagesData.applyStylesOnAllWdiths) {
			for (const key in ElementData.styles) {
				ElementData.styles[key][styleValue] = newPropertyValue
			}
		} else {
			if (PagesData.activePageWidthMode == PageModes.XSMALL) ElementData.styles.xsmall[styleValue] = newPropertyValue
			else if (PagesData.activePageWidthMode == PageModes.SMALL) ElementData.styles.small[styleValue] = newPropertyValue
			else if (PagesData.activePageWidthMode == PageModes.MEDIUM) ElementData.styles.medium[styleValue] = newPropertyValue
			else if (PagesData.activePageWidthMode == PageModes.LARGE) ElementData.styles.large[styleValue] = newPropertyValue
			else if (PagesData.activePageWidthMode == PageModes.XLARGE) ElementData.styles.xlarge[styleValue] = newPropertyValue
		}

		const ele = document.getElementById(ElementData.activeElementId)

		if (ele) ele.style[styleValue] = newPropertyValue
	}
}
