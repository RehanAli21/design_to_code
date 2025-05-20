import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpBorder() {
	const borderToggler = document.getElementById('appeareance_border_toggle')

	if (borderToggler) {
		borderToggler.addEventListener('focusout', saveDataIntoElement)

		toggleBorderStyles(borderToggler)

		borderToggler.addEventListener('change', () => toggleBorderStyles(borderToggler))
	}
}

function toggleBorderStyles(borderToggler) {
	for (const child of borderToggler.parentElement.parentElement.children) {
		if (child.classList.contains('property_section')) {
			child.style.display = borderToggler.checked ? '' : 'none'
		}
	}

	let borderValue = borderToggler.checked ? '1px solid black' : ''

	changeElementStyle(['border'], { value: borderValue }, 'no_value')
}
