import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpInnerYSpace() {
	const innerYSpaceInput = document.getElementById('appeareance_inner_y_input')
	const innerYSpaceSelect = document.getElementById('appeareance_inner_y_select')

	if (innerYSpaceInput && innerYSpaceSelect) {
		innerYSpaceInput.addEventListener('focusout', saveDataIntoElement)
		innerYSpaceInput.addEventListener('input', () => changeElementStyle(['padding-top', 'padding-bottom'], innerYSpaceInput, innerYSpaceSelect))

		innerYSpaceSelect.addEventListener('focusout', saveDataIntoElement)
		innerYSpaceSelect.addEventListener('change', () => changeElementStyle(['padding-top', 'padding-bottom'], innerYSpaceInput, innerYSpaceSelect))
	}
}
