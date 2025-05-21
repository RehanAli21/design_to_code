import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

let borderProperties = ['border-left', 'border-right', 'border-top', 'border-bottom']

const borderToggler = document.getElementById('appeareance_border_toggle')
const borderColorInput = document.getElementById('appeareance_border_color_input')
const borderSizeInput = document.getElementById('appeareance_border_size_input')
const borderRadiusInput = document.getElementById('appeareance_border_radius_input')
const borderStyleSelect = document.getElementById('appeareance_border_style_select')
const borderLeftBtn = document.getElementById('appeareance_border_side_L')
const borderRightBtn = document.getElementById('appeareance_border_side_R')
const borderTopBtn = document.getElementById('appeareance_border_side_T')
const borderBottomBtn = document.getElementById('appeareance_border_side_B')

export default function setUpBorder() {
	if (borderToggler) {
		borderToggler.addEventListener('focusout', saveDataIntoElement)

		toggleBorderStyles(borderToggler)

		borderToggler.addEventListener('change', () => {
			borderSizeBtns()
			toggleBorderStyles(borderToggler)
		})
	}

	if (borderColorInput) {
		borderColorInput.addEventListener('focusout', saveDataIntoElement)

		borderColorInput.addEventListener('input', () =>
			changeElementStyle(getBorderPropertyWithSpecificValue('color'), borderColorInput, 'no_value')
		)
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

	if (borderBottomBtn) {
		borderBottomBtn.addEventListener('click', () => toggleBordeeSide('border-bottom'))
	}

	if (borderTopBtn) {
		borderTopBtn.addEventListener('click', () => toggleBordeeSide('border-top'))
	}

	if (borderLeftBtn) {
		borderLeftBtn.addEventListener('click', () => toggleBordeeSide('border-left'))
	}

	if (borderRightBtn) {
		borderRightBtn.addEventListener('click', () => toggleBordeeSide('border-right'))
	}
}

function toggleBorderStyles(borderToggler) {
	for (const child of borderToggler.parentElement.parentElement.children) {
		if (child.classList.contains('property_section')) {
			child.style.display = borderToggler.checked ? '' : 'none'
		}
	}

	let borderValue = borderToggler.checked ? '1px solid black' : ''

	changeElementStyle(borderProperties, { value: borderValue }, 'no_value')
}

function getBorderPropertyWithSpecificValue(value) {
	return borderProperties.map(e => `${e}-${value}`)
}

function toggleBordeeSide(value) {
	if (borderProperties.includes(value)) {
		borderProperties = borderProperties.filter(e => e !== value)
	} else {
		borderProperties.push(value)
	}

	borderSizeBtns()
}

function borderSizeBtns() {
	if (borderProperties.includes('border-left')) {
		borderLeftBtn.style.backgroundColor = 'var(--primary)'
	} else {
		borderLeftBtn.style.backgroundColor = ''
	}

	if (borderProperties.includes('border-right')) {
		borderRightBtn.style.backgroundColor = 'var(--primary)'
	} else {
		borderRightBtn.style.backgroundColor = ''
	}

	if (borderProperties.includes('border-top')) {
		borderTopBtn.style.backgroundColor = 'var(--primary)'
	} else {
		borderTopBtn.style.backgroundColor = ''
	}

	if (borderProperties.includes('border-bottom')) {
		borderBottomBtn.style.backgroundColor = 'var(--primary)'
	} else {
		borderBottomBtn.style.backgroundColor = ''
	}
}
