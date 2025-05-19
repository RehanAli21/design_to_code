import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpInnerXSpace() {
	const innerXSpaceInput = document.getElementById('appeareance_inner_x_input')
	const innerXSpaceSelect = document.getElementById('appeareance_inner_x_select')

	if (innerXSpaceInput && innerXSpaceSelect) {
		innerXSpaceInput.addEventListener('focusout', saveDataIntoElement)
		innerXSpaceInput.addEventListener('input', () => changeElementStyle(['padding-left', 'padding-right'], innerXSpaceInput, innerXSpaceSelect))

		innerXSpaceSelect.addEventListener('focusout', saveDataIntoElement)
		innerXSpaceSelect.addEventListener('change', () => changeElementStyle(['padding-left', 'padding-right'], innerXSpaceInput, innerXSpaceSelect))
	}
}
