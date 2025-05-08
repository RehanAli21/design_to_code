import { ElementData } from '../../data/element_data.js'
import { PageModes } from '../../data/enums.js'
import PagesData from '../../data/page_data.js'
import { printCurrentPageElements } from '../../show_elements_in_page.js'

const widthInput = document.getElementById('transform_width_input')
const widthSelect = document.getElementById('transform_width_select')

if (widthInput) {
	widthInput.addEventListener('focusout', saveDataIntoElement)
	widthInput.addEventListener('input', changeElementWidth)
}

if (widthSelect) {
	widthSelect.addEventListener('focusout', saveDataIntoElement)
	widthSelect.addEventListener('change', changeElementWidth)
}

function saveDataIntoElement(e) {
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

function changeElementWidth(e) {
	if (widthSelect) {
		const newWith = `${widthInput.value}${widthSelect.value}`

		if (PagesData.applyStylesOnAllWdiths) {
			for (const key in ElementData.styles) {
				ElementData.styles[key]['width'] = newWith
			}
		} else {
			if (PagesData.activePageWidthMode == PageModes.XSMALL) ElementData.styles.xsmall['width'] = newWith
			else if (PagesData.activePageWidthMode == PageModes.SMALL) ElementData.styles.small['width'] = newWith
			else if (PagesData.activePageWidthMode == PageModes.MEDIUM) ElementData.styles.medium['width'] = newWith
			else if (PagesData.activePageWidthMode == PageModes.large) ElementData.styles.large['width'] = newWith
			else if (PagesData.activePageWidthMode == PageModes.XLARGE) ElementData.styles.xLarge['width'] = newWith
		}

		const ele = document.getElementById(ElementData.activeElementId)

		if (ele) ele.style.width = newWith
	}
}
