import { changePageStyle } from '../property_base.js'

export default function setUpBackgroundColor() {
	const colorInput = document.getElementById('page_color_input')

	if (colorInput) {
		colorInput.addEventListener('input', () => changePageStyle(colorInput.value))
	}
}
