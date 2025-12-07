import { ElementData } from '../../data/element_data.js'
import { getStyles, splitValue } from '../../updatePropertyInUI/updatePropertyUIUtils.js'
import { changeElementStyle, removeElementStyle, saveDataIntoElement } from '../property_base.js'

const gridToggler = document.getElementById('individual_grid_toggle')

const gridColToggler = document.getElementById('grid_col_btn')
const gridColNumInput = document.getElementById('cols-number-input')

const gridRowToggler = document.getElementById('grid_row_btn')
const gridRowNumInput = document.getElementById('rows-number-input')

export default function setUpGrid() {
	for (let i = 0; i < 25; i++) {
		createGridSubValueInputs(true, i, 'cols_values_div')
		createGridSubValueInputs(false, i, 'rows_values_div')
	}
	if (gridToggler) {
		gridToggler.addEventListener('focusout', saveDataIntoElement)

		toggleGridStyles(gridToggler, gridToggler.checked)

		gridToggler.addEventListener('change', () => {
			toggleGridStyles(gridToggler, gridToggler.checked)
		})
	}

	gridColToggler.addEventListener('click', () => {
		hideAllSubValueInputs()
		removeRows()
		changeElementStyle(['grid-template-columns'], { value: '1fr' }, 'no_value')
		saveDataIntoElement()

		gridColNumInput.style.display = 'grid'
		gridColToggler.style.backgroundColor = 'var(--primary)'
	})

	gridRowToggler.addEventListener('click', () => {
		hideAllSubValueInputs()
		removeCols()
		changeElementStyle(['grid-template-rows'], { value: '1fr' }, 'no_value')
		saveDataIntoElement()

		gridRowNumInput.style.display = 'grid'
		gridRowToggler.style.backgroundColor = 'var(--primary)'
	})

	gridColNumInput.addEventListener('input', e => {
		if (e.target.value < 0 || e.target.value > 25 || Number.isNaN(e.target.value)) return

		const numOfCols = parseInt(e.target.value)

		hideAllSubValueInputs()
		let frs = ''

		for (let i = 0; i < numOfCols; i++) {
			frs += '1fr '

			showSubValueInput(true, i, '1', 'fr')
		}

		removeRows()
		changeElementStyle(['grid-template-columns'], { value: frs }, 'no_value')
		saveDataIntoElement()

		gridColNumInput.style.display = 'grid'
		gridColToggler.style.backgroundColor = 'var(--primary)'
	})

	gridRowNumInput.addEventListener('input', e => {
		if (e.target.value < 0 || e.target.value > 25 || Number.isNaN(e.target.value)) return

		const numOfRows = parseInt(e.target.value)

		hideAllSubValueInputs()
		let frs = ''

		for (let i = 0; i < numOfRows; i++) {
			frs += '1fr '

			showSubValueInput(false, i, '1', 'fr')
		}

		removeCols()
		changeElementStyle(['grid-template-rows'], { value: frs }, 'no_value')
		saveDataIntoElement()

		gridRowNumInput.style.display = 'grid'
		gridRowToggler.style.backgroundColor = 'var(--primary)'
	})
}

export function toggleGridStyles(gridToggler, show) {
	for (const child of gridToggler.parentElement.parentElement.children) {
		if (child.classList.contains('property_section_head')) {
			child.style.display = show ? '' : 'none'
		}
	}

	if (show) {
		changeElementStyle(['display'], { value: 'grid' }, 'no_value')
		showGridSubValueInputs('cols_values_div', 'rows_values_div')
	} else {
		removeAllGridProperties()
		removeCols()
		removeRows()
		hideGridSubValueInputs('cols_values_div', 'rows_values_div')
		hideAllSubValueInputs()
	}
}

function removeAllGridProperties() {
	let gridProperties = ['display', 'grid-template-columnss', 'grid-template-rows']
	removeElementStyle(gridProperties)
	saveDataIntoElement()
}

function removeRows() {
	removeElementStyle(['grid-template-rows'])
	gridRowNumInput.style.display = 'none'
	gridRowToggler.style.backgroundColor = ''
}

function removeCols() {
	removeElementStyle(['grid-template-columns'])
	gridColNumInput.style.display = 'none'
	gridColToggler.style.backgroundColor = ''
}

function createGridSubValueInputs(isCol, index, parentId) {
	const type = isCol ? 'col' : 'row'
	const div = document.createElement('div')
	div.id = `grid_sub_${type}_${index + 1}`
	div.classList.add('property_section')
	div.style.width = '80%'
	div.style.display = 'none'
	div.style.gridTemplateColumns = '30% 30% 30%'
	div.style.justifyContent = 'center'
	div.style.margin = '10px auto'

	const label = document.createElement('label')
	label.innerText = `${type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()} ${index + 1}:`

	div.appendChild(label)

	const input = document.createElement('input')
	input.placeholder = 'value'
	input.type = 'number'
	input.id = `grid_${type}_input_${index + 1}`

	input.addEventListener('input', e => {
		const styles = getStyles()

		if (isCol && Object.hasOwn(styles, 'grid-template-columns')) {
			const cols = styles['grid-template-columns'].split(' ').filter(e => e !== '')

			if (cols.length >= index) {
				const value = splitValue(cols[index])

				if (value !== null) {
					cols[index] = `${e.currentTarget.value}${value.unit}`
				}
			}

			const colValue = cols.join(' ') + ' '

			changeElementStyle(['grid-template-columns'], { value: colValue }, 'no_value')
			saveDataIntoElement()
		} else if (!isCol && Object.hasOwn(styles, 'grid-template-rows')) {
			const rows = styles['grid-template-rows'].split(' ').filter(e => e !== '')

			if (rows.length >= index) {
				const value = splitValue(rows[index])

				if (value !== null) {
					rows[index] = `${e.currentTarget.value}${value.unit}`
				}
			}

			const rowValue = rows.join(' ') + ' '

			changeElementStyle(['grid-template-rows'], { value: rowValue }, 'no_value')
			saveDataIntoElement()
		}
	})

	div.appendChild(input)

	const select = document.createElement('select')
	select.classList.add('select')
	select.value = 'fr'
	select.id = `grid_${type}_select_${index + 1}`

	const optionsValues = ['fr', 'px', '%']

	for (let i = 0; i < optionsValues.length; i++) {
		const element = optionsValues[i]

		const option = document.createElement('option')
		option.value = element
		option.innerText = element.toUpperCase()

		select.appendChild(option)
	}

	div.appendChild(select)

	const parent = document.getElementById(parentId)

	if (parent) {
		parent.appendChild(div)
	}
}

function showGridSubValueInputs(colParentId, rowParentId) {
	const colParent = document.getElementById(colParentId)

	if (colParent) {
		colParent.style.display = ''
	}

	const rowParent = document.getElementById(rowParentId)

	if (rowParent) {
		rowParent.style.display = ''
	}
}

function hideGridSubValueInputs(colParentId, rowParentId) {
	const colParent = document.getElementById(colParentId)

	if (colParent) {
		colParent.style.display = 'none'
	}

	const rowParent = document.getElementById(rowParentId)

	if (rowParent) {
		rowParent.style.display = 'none'
	}
}

export function showSubValueInput(isCol, index, inputValue, selectValue) {
	const type = isCol ? 'col' : 'row'
	const divId = `grid_sub_${type}_${index + 1}`

	const div = document.getElementById(divId)

	if (div) {
		div.style.display = 'grid'

		const children = div.children

		for (const child of children) {
			if (child.tagName === 'INPUT') {
				child.value = inputValue
			} else if (child.tagName === 'SELECT') {
				child.value = selectValue
			}
		}
	}
}

export function hideAllSubValueInputs() {
	const types = ['col', 'row']

	for (const type of types) {
		for (let index = 0; index < 25; index++) {
			const divId = `grid_sub_${type}_${index + 1}`

			const div = document.getElementById(divId)

			if (div) {
				div.style.display = 'none'
			}
		}
	}
}
