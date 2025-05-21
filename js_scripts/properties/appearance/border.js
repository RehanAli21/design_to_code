import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpBorder() {
	const borderToggler = document.getElementById('appeareance_border_toggle')
	const borderColorInput = document.getElementById('appeareance_border_color_input')
	const borderSizeInput = document.getElementById('appeareance_border_size_input')
	const borderRadiusInput = document.getElementById('appeareance_border_radius_input')
	const borderStyleSelect = document.getElementById('appeareance_border_style_select')

	if (borderToggler) {
		borderToggler.addEventListener('focusout', saveDataIntoElement)

		toggleBorderStyles(borderToggler)

		borderToggler.addEventListener('change', () => toggleBorderStyles(borderToggler))
	}

	if (borderColorInput) {
		borderColorInput.addEventListener('focusout', saveDataIntoElement)

		borderColorInput.addEventListener('input', () => changeElementStyle(['border-color'], borderColorInput, 'no_value'))
	}

	if (borderSizeInput) {
		borderSizeInput.addEventListener('focusout', saveDataIntoElement)

		borderSizeInput.addEventListener('input', () => changeElementStyle(['border-width'], { value: borderSizeInput.value + 'px' }, 'no_value'))
	}

	if (borderRadiusInput) {
		borderRadiusInput.addEventListener('focusout', saveDataIntoElement)

		borderRadiusInput.addEventListener('input', () =>
			changeElementStyle(['border-radius'], { value: borderRadiusInput.value + 'px' }, 'no_value')
		)
	}

	if (borderStyleSelect) {
		borderStyleSelect.addEventListener('focusout', saveDataIntoElement)

		borderStyleSelect.addEventListener('change', () => changeElementStyle(['border-style'], borderStyleSelect, 'no_value'))
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
