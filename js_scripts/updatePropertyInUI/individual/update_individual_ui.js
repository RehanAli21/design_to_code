import { ElementData } from '../../data/element_data.js'

export default function updateIndividualPropertyUI() {
	const innerTextArea = document.getElementById('text_property_textarea')

	innerTextArea.value = ElementData.innerText
}
