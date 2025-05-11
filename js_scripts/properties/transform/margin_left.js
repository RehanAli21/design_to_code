import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

const marginLeftInput = document.getElementById('transform_x_input')
const marginLeftSelect = document.getElementById('transform_x_select')

if (marginLeftInput && marginLeftSelect) {
	marginLeftInput.addEventListener('focusout', saveDataIntoElement)
	marginLeftInput.addEventListener('input', () => changeElementStyle('marginLeft', marginLeftInput, marginLeftSelect))

	marginLeftSelect.addEventListener('focusout', saveDataIntoElement)
	marginLeftSelect.addEventListener('change', () => changeElementStyle('marginLeft', marginLeftInput, marginLeftSelect))
}
