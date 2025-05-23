import { getStyles, splitValue } from '../updatePropertyUIUtils.js'

export default function UpdateAppearnceUI() {
	const bgColorInput = document.getElementById('appeareance_color_input')
	const innerXSpaceInput = document.getElementById('appeareance_inner_x_input')
	const innerXSpaceSelect = document.getElementById('appeareance_inner_x_select')
	const innerYSpaceInput = document.getElementById('appeareance_inner_y_input')
	const innerYSpaceSelect = document.getElementById('appeareance_inner_y_select')

	const styles = getStyles()

	if (styles['background-color']) {
		bgColorInput.value = styles['background-color']
	} else {
		bgColorInput.value = '#000000'
	}

	if (styles['padding-left']) {
		const value = splitValue(styles['padding-left'])

		if (value != null) {
			innerXSpaceInput.value = value.number
			innerXSpaceSelect.value = value.unit
		}
	} else {
		innerXSpaceInput.value = ''
		innerXSpaceSelect.value = 'px'
	}

	if (styles['padding-top']) {
		const value = splitValue(styles['padding-top'])

		if (value != null) {
			innerYSpaceInput.value = value.number
			innerYSpaceSelect.value = value.unit
		}
	} else {
		innerYSpaceInput.value = ''
		innerYSpaceSelect.value = 'px'
	}
}
