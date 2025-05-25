import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpTextColor() {
	const colorInput = document.getElementById('text_color_input')

	if (colorInput) {
		colorInput.addEventListener('focusout', saveDataIntoElement)
		colorInput.addEventListener('input', () => changeElementStyle(['color'], colorInput, 'no_value'))
	}
}
