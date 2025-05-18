import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpBackgroundColor() {
	const colorInput = document.getElementById('appeareance_color_input')

	if (colorInput) {
		colorInput.addEventListener('focusout', saveDataIntoElement)
		colorInput.addEventListener('input', () => changeElementStyle(['background-color'], colorInput, 'no_value'))
	}
}
