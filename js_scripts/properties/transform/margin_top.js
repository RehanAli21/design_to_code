import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpMarginTop() {
	const marginTopInput = document.getElementById('transform_y_input')
	const marginTopSelect = document.getElementById('transform_y_select')

	if (marginTopInput && marginTopSelect) {
		marginTopInput.addEventListener('focusout', saveDataIntoElement)
		marginTopInput.addEventListener('input', () => changeElementStyle(['marginTop'], marginTopInput, marginTopSelect))

		marginTopSelect.addEventListener('focusout', saveDataIntoElement)
		marginTopSelect.addEventListener('change', () => changeElementStyle(['marginTop'], marginTopInput, marginTopSelect))
	}
}
