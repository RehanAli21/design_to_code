import { getStyles, splitValue } from '../updatePropertyUIUtils.js'

export default function updateTransformsUI() {
	const heightInput = document.getElementById('transform_height_input')
	const heightSelect = document.getElementById('transform_height_select')

	const widthInput = document.getElementById('transform_width_input')
	const widthSelect = document.getElementById('transform_width_select')

	const marginTopInput = document.getElementById('transform_y_input')
	const marginTopSelect = document.getElementById('transform_y_select')

	const marginLeftInput = document.getElementById('transform_x_input')
	const marginLeftSelect = document.getElementById('transform_x_select')

	const styles = getStyles()

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
