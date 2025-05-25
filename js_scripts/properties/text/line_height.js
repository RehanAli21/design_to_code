import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpLineHeight() {
	const lineHeightInput = document.getElementById('text_line_height_input')

	if (lineHeightInput) {
		lineHeightInput.addEventListener('focusout', saveDataIntoElement)
		lineHeightInput.addEventListener('input', () => changeElementStyle(['line-height'], { value: `${lineHeightInput.value}px` }, 'no_value'))
	}
}
