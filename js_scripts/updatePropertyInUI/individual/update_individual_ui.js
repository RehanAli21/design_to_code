import { ElementData } from '../../data/element_data.js'
import { InputTypes } from '../../data/enums.js'
import { getStyles, splitValue } from '../updatePropertyUIUtils.js'
import { toggleGridStyles, hideAllSubValueInputs, showSubValueInput } from '../../properties/individual/grid.js'

export default function updateIndividualPropertyUI() {
	const innerTextArea = document.getElementById('text_property_textarea')
	const placeholderInput = document.getElementById('placeholder_property_input')
	const inputTypeSelect = document.getElementById('input_type_property_select')
	const minInput = document.getElementById('min_property_input')
	const maxInput = document.getElementById('max_property_input')
	const elementNameInput = document.getElementById('element_name_property_input')

	innerTextArea.value = ElementData.innerText

	minInput.value = ElementData.min

	maxInput.value = ElementData.max

	placeholderInput.value = ElementData.placeholder

	elementNameInput.value = ElementData.name

	for (const key in InputTypes) {
		if (ElementData.inputType == InputTypes[key]) {
			inputTypeSelect.value = key
		}
	}

	const gridCheckBox = document.getElementById('individual_grid_toggle')

	const gridColToggler = document.getElementById('grid_col_btn')
	const gridColNumInput = document.getElementById('cols-number-input')

	const gridRowToggler = document.getElementById('grid_row_btn')
	const gridRowNumInput = document.getElementById('rows-number-input')

	const styles = getStyles()

	console.log(styles, 'styles')

	hideAllSubValueInputs()

	if (Object.hasOwn(styles, 'display') && styles.display === 'grid') {
		gridCheckBox.checked = true
		toggleGridStyles(gridCheckBox, true)

		if (Object.hasOwn(styles, 'grid-template-columns')) {
			const cols = styles['grid-template-columns'].split(' ').filter(e => e !== '')

			gridColToggler.style.backgroundColor = 'var(--primary)'
			gridColNumInput.style.display = 'grid'
			gridColNumInput.value = cols.length

			for (let index = 0; index < cols.length; index++) {
				const element = cols[index]

				const value = splitValue(element)

				if (value !== null) {
					showSubValueInput(true, index, value.number, value.unit)
				}
			}
		} else {
			gridColToggler.style.backgroundColor = ''
			gridColNumInput.style.display = 'none'
			gridColNumInput.value = ''
		}

		if (Object.hasOwn(styles, 'grid-template-rows')) {
			const rows = styles['grid-template-rows'].split(' ').filter(e => e !== '')

			gridRowToggler.style.backgroundColor = 'var(--primary)'
			gridRowNumInput.style.display = 'grid'
			gridRowNumInput.value = rows.length

			for (let index = 0; index < rows.length; index++) {
				const element = rows[index]

				const value = splitValue(element)

				if (value !== null) {
					showSubValueInput(false, index, value.number, value.unit)
				}
			}
		} else {
			gridRowToggler.style.backgroundColor = ''
			gridRowNumInput.style.display = 'none'
			gridRowNumInput.value = ''
		}
	} else {
		gridCheckBox.checked = false

		toggleGridStyles(gridCheckBox, false)

		gridColNumInput.style.display = 'none'

		gridRowNumInput.style.display = 'none'
	}
}
