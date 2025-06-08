import { ElementData } from '../../data/element_data.js'

export default function updateIndividualPropertyUI() {
	const innerTextArea = document.getElementById('text_property_textarea')
	const placeholderInput = document.getElementById('placeholder_property_input')

	innerTextArea.value = ElementData.innerText

	placeholderInput.value = ElementData.placeholder
}
