import { ElementData } from '../../data/element_data.js'
import { changeElementStyle, removeElementStyle, saveDataIntoElement } from '../property_base.js'

const gridToggler = document.getElementById('individual_grid_toggle')

const gridColToggler = document.getElementById('grid_col_btn')
const gridColNumInput = document.getElementById('cols-number-input')

const gridRowToggler = document.getElementById('grid_row_btn')
const gridRowNumInput = document.getElementById('rows-number-input')

export default function setUpGrid() {
	if (gridToggler) {
		gridToggler.addEventListener('focusout', saveDataIntoElement)

		toggleGridStyles(gridToggler, gridToggler.checked)

		gridToggler.addEventListener('change', () => {
			toggleGridStyles(gridToggler, gridToggler.checked)
		})
	}

	gridColToggler.addEventListener('click', () => {
		removeRows()
		changeElementStyle(['grid-template-columns'], { value: '1fr' }, 'no_value')
		saveDataIntoElement()

		gridColNumInput.style.display = 'grid'
		gridColToggler.style.backgroundColor = 'var(--primary)'
	})

	gridRowToggler.addEventListener('click', () => {
		removeCols()
		changeElementStyle(['grid-template-rows'], { value: '1fr' }, 'no_value')
		saveDataIntoElement()

		gridRowNumInput.style.display = 'grid'
		gridRowToggler.style.backgroundColor = 'var(--primary)'
	})

	gridColNumInput.addEventListener('input', e => {
		if (e.target.value < 1 || e.target.value > 25 || Number.isNaN(e.target.value)) return

		const numOfCols = parseInt(e.target.value)

		// continue from here add number of frs based on numofCols

		let frs = ''

		for (let i = 0; i < numOfCols; i++) {
			frs += '1fr '
		}

		removeRows()
		changeElementStyle(['grid-template-columns'], { value: frs }, 'no_value')
		saveDataIntoElement()

		gridColNumInput.style.display = 'grid'
		gridColToggler.style.backgroundColor = 'var(--primary)'
	})

	gridRowNumInput.addEventListener('input', e => {
		if (e.target.value < 1 || e.target.value > 25 || Number.isNaN(e.target.value)) return

		const numOfRows = parseInt(e.target.value)

		// continue from here add number of frs based on numofRows

		let frs = ''

		for (let i = 0; i < numOfRows; i++) {
			frs += '1fr '
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
	} else {
		removeAllGridProperties()
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
