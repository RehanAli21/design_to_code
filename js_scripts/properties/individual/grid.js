import { ElementData } from '../../data/element_data.js'
import { changeElementStyle, removeElementStyle, saveDataIntoElement } from '../property_base.js'

const gridToggler = document.getElementById('individual_grid_toggle')

export default function setUpGrid() {
	if (gridToggler) {
		gridToggler.addEventListener('focusout', saveDataIntoElement)

		toggleGridStyles(gridToggler, gridToggler.checked)

		gridToggler.addEventListener('change', () => {
			toggleGridStyles(gridToggler, gridToggler.checked)
		})
	}
}

export function toggleGridStyles(gridToggler, show) {
	for (const child of gridToggler.parentElement.parentElement.children) {
		if (child.classList.contains('property_section')) {
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
