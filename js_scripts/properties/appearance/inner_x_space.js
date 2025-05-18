import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpInnerXSpace() {
	const innerXSpaceInput = document.getElementById('appeareance_inner_x_input')
	const innderXSpaceSelect = document.getElementById('appeareance_inner_x_select')

	if (innerXSpaceInput && innderXSpaceSelect) {
		innerXSpaceInput.addEventListener('focusout', saveDataIntoElement)
		innerXSpaceInput.addEventListener('input', () => changeElementStyle(['padding-left', 'padding-right'], innerXSpaceInput, innderXSpaceSelect))

		innderXSpaceSelect.addEventListener('focusout', saveDataIntoElement)
		innderXSpaceSelect.addEventListener('change', () =>
			changeElementStyle(['padding-left', 'padding-rught'], innerXSpaceInput, innderXSpaceSelect)
		)
	}
}
