import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpMarginLeft() {
	const marginLeftInput = document.getElementById('transform_x_input')
	const marginLeftSelect = document.getElementById('transform_x_select')

	if (marginLeftInput && marginLeftSelect) {
		marginLeftInput.addEventListener('focusout', saveDataIntoElement)
		marginLeftInput.addEventListener('input', () => changeElementStyle(['margin-left'], marginLeftInput, marginLeftSelect))

		marginLeftSelect.addEventListener('focusout', saveDataIntoElement)
		marginLeftSelect.addEventListener('change', () => changeElementStyle(['margin-left'], marginLeftInput, marginLeftSelect))
	}
}
