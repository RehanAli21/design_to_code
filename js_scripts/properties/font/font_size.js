import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpFontSize() {
	const font_size_input = document.getElementById('font_size_input')

	if (font_size_input) {
		font_size_input.addEventListener('focusout', saveDataIntoElement)
		font_size_input.addEventListener('input', () => changeElementStyle(['font-size'], { value: `${font_size_input.value}px` }, 'no_value'))
	}
}
