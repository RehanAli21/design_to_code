import { ElementData } from '../../data/element_data.js'
import { InputTypes } from '../../data/enums.js'

export default function updateIndividualPropertyUI() {
	const innerTextArea = document.getElementById('text_property_textarea')
	const placeholderInput = document.getElementById('placeholder_property_input')
	const inputTypeSelect = document.getElementById('input_type_property_select')

	innerTextArea.value = ElementData.innerText

	placeholderInput.value = ElementData.placeholder
	for (const key in InputTypes) {
		if (ElementData.inputType == InputTypes[key]) {
			inputTypeSelect.value = key
		}
	}
}
