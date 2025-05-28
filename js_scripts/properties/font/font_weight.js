import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpFontWeight() {
	const fontWeightSelect = document.getElementById('font_weight_select')

	if (fontWeightSelect) {
		fontWeightSelect.addEventListener('change', () => {
			changeElementStyle(['font-weight'], fontWeightSelect, 'no_value')
			saveDataIntoElement()
		})
	}
}
