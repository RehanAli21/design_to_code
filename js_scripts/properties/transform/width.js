import { ElementData } from '../../data/element_data.js'
import { PageModes } from '../../data/enums.js'
import PagesData from '../../data/page_data.js'

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
	console.log('save data', e.target.id)
}

function changeElementWidth(e) {
	if (widthSelect) {
		const newWith = `${widthInput.value}${widthSelect.value}`

		if (PagesData.stylesPerViewMode) {
			if (PagesData.pageWidthMode == PageModes.XSMALL) ElementData.styles.xsmall['width'] = newWith
			else if (PagesData.pageWidthMode == PageModes.SMALL) ElementData.styles.small['width'] = newWith
			else if (PagesData.pageWidthMode == PageModes.MEDIUM) ElementData.styles.medium['width'] = newWith
			else if (PagesData.pageWidthMode == PageModes.large) ElementData.styles.large['width'] = newWith
			else if (PagesData.pageWidthMode == PageModes.XLARGE) ElementData.styles.xLarge['width'] = newWith
		} else {
			for (const key in ElementData.styles) {
				ElementData.styles[key]['width'] = newWith
			}
		}

		const ele = document.getElementById(ElementData.activeElementId)

		if (ele) ele.style.width = newWith
	}
}
