import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

const heightInput = document.getElementById('transform_height_input')
const heightSelect = document.getElementById('transform_height_select')

if (heightInput && heightSelect) {
	heightInput.addEventListener('focusout', saveDataIntoElement)
	heightInput.addEventListener('input', () => changeElementStyle('height', heightInput, heightSelect))

	heightSelect.addEventListener('focusout', saveDataIntoElement)
	heightSelect.addEventListener('change', () => changeElementStyle('height', heightInput, heightSelect))
}
