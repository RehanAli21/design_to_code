import { ElementData } from '../../data/element_data.js'
import { PageModes } from '../../data/enums.js'
import PagesData from '../../data/page_data.js'

export default function updateTransformsUI() {
	const heightInput = document.getElementById('transform_height_input')
	const heightSelect = document.getElementById('transform_height_select')

	const widthInput = document.getElementById('transform_width_input')
	const widthSelect = document.getElementById('transform_width_select')

	const marginTopInput = document.getElementById('transform_y_input')
	const marginTopSelect = document.getElementById('transform_y_select')

	const marginLeftInput = document.getElementById('transform_x_input')
	const marginLeftSelect = document.getElementById('transform_x_select')

	let styles = getStyles()

	if (styles['width']) {
		const value = splitValue(styles['width'])

		if (value != null) {
			widthInput.value = value.number
			widthSelect.value = value.unit
		}
	} else {
		widthInput.value = ''
		widthSelect.value = 'px'
	}

	if (styles['height']) {
		const value = splitValue(styles['height'])

		if (value != null) {
			heightInput.value = value.number
			heightSelect.value = value.unit
		}
	} else {
		heightInput.value = ''
		heightSelect.value = 'px'
	}

	if (styles['marginLeft']) {
		const value = splitValue(styles['marginLeft'])

		if (value != null) {
			marginLeftInput.value = value.number
			marginLeftSelect.value = value.unit
		}
	} else {
		marginLeftInput.value = ''
		marginLeftSelect.value = 'px'
	}

	if (styles['marginTop']) {
		const value = splitValue(styles['marginTop'])

		if (value != null) {
			marginTopInput.value = value.number
			marginTopSelect.value = value.unit
		}
	} else {
		marginTopInput.value = ''
		marginTopSelect.value = 'px'
	}
}

function getStyles() {
	let styles = {}

	if (PagesData.activePageWidthMode == PageModes.XSMALL) styles = ElementData.styles.xsmall
	else if (PagesData.activePageWidthMode == PageModes.SMALL) styles = ElementData.styles.small
	else if (PagesData.activePageWidthMode == PageModes.MEDIUM) styles = ElementData.styles.medium
	else if (PagesData.activePageWidthMode == PageModes.LARGE) styles = ElementData.styles.large
	else if (PagesData.activePageWidthMode == PageModes.XLARGE) styles = ElementData.styles.xlarge

	return styles
}

function splitValue(value) {
	const match = value.match(/^([0-9.]+)(px|%|em|rem)$/)
	if (match) {
		return {
			number: parseFloat(match[1]),
			unit: match[2],
		}
	}
	return null // or handle invalid input
}
