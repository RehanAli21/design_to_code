import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpWidth() {
	const widthInput = document.getElementById('transform_width_input')
	const widthSelect = document.getElementById('transform_width_select')

	if (widthInput && widthSelect) {
		widthInput.addEventListener('focusout', saveDataIntoElement)
		widthInput.addEventListener('input', () => changeElementStyle('width', widthInput, widthSelect))

		widthSelect.addEventListener('focusout', saveDataIntoElement)
		widthSelect.addEventListener('change', () => changeElementStyle('width', widthInput, widthSelect))
	}
}
