import { ElementData } from '../../data/element_data.js'
import { changeElementStyle, removeElementStyle, saveDataIntoElement } from '../property_base.js'

const borderToggler = document.getElementById('appeareance_border_toggle')
const borderColorInput = document.getElementById('appeareance_border_color_input')
const borderSizeInput = document.getElementById('appeareance_border_size_input')
const borderRadiusInput = document.getElementById('appeareance_border_radius_input')
const borderStyleSelect = document.getElementById('appeareance_border_style_select')
const borderLeftBtn = document.getElementById('appeareance_border_side_L')
const borderRightBtn = document.getElementById('appeareance_border_side_R')
const borderTopBtn = document.getElementById('appeareance_border_side_T')
const borderBottomBtn = document.getElementById('appeareance_border_side_B')
const borderAllBtn = document.getElementById('appeareance_border_side_A')

let currentBorderSideValue = 'border'

export default function setUpBorder() {
	getCurrentBorder()

	if (borderToggler) {
		borderToggler.addEventListener('focusout', saveDataIntoElement)

		toggleBorderStyles(borderToggler)

		borderToggler.addEventListener('change', () => {
			toggleBorderStyles(borderToggler)
		})
	}

	if (borderColorInput) {
		borderColorInput.addEventListener('focusout', saveDataIntoElement)

		borderColorInput.addEventListener('input', () => {
			const borderStyleValue = `${borderSizeInput.value == '' ? 1 : borderSizeInput.value}px ${borderStyleSelect.value} ${
				borderColorInput.value
			}`
			changeElementStyle([`${currentBorderSideValue}`], { value: borderStyleValue }, 'no_value')
		})
	}

	if (borderSizeInput) {
		borderSizeInput.addEventListener('focusout', saveDataIntoElement)

		borderSizeInput.addEventListener('input', () => {
			const borderStyleValue = `${borderSizeInput.value == '' ? 1 : borderSizeInput.value}px ${borderStyleSelect.value} ${
				borderColorInput.value
			}`
			changeElementStyle([[`${currentBorderSideValue}`]], { value: borderStyleValue }, 'no_value')
		})
	}

	if (borderRadiusInput) {
		borderRadiusInput.addEventListener('focusout', saveDataIntoElement)

		borderRadiusInput.addEventListener('input', () =>
			changeElementStyle(['border-radius'], { value: borderRadiusInput.value + 'px' }, 'no_value')
		)
	}

	if (borderStyleSelect) {
		borderStyleSelect.addEventListener('focusout', saveDataIntoElement)

		borderStyleSelect.addEventListener('change', () => {
			const borderStyleValue = `${borderSizeInput.value == '' ? 1 : borderSizeInput.value}px ${borderStyleSelect.value} ${
				borderColorInput.value
			}`
			changeElementStyle([[`${currentBorderSideValue}`]], { value: borderStyleValue }, 'no_value')
		})
	}

	if (borderAllBtn) {
		borderAllBtn.addEventListener('click', () => {
			const borderStyleValue = `${borderSizeInput.value == '' ? 1 : borderSizeInput.value}px ${borderStyleSelect.value} ${
				borderColorInput.value
			}`
			removeAllBorderProperties()
			changeElementStyle(['border'], { value: borderStyleValue }, 'no_value')
			currentBorderSideValue = 'border'
			setButtonsBackgroundColor()
		})
	}

	if (borderLeftBtn) {
		borderLeftBtn.addEventListener('click', () => {
			const borderStyleValue = `${borderSizeInput.value == '' ? 1 : borderSizeInput.value}px ${borderStyleSelect.value} ${
				borderColorInput.value
			}`
			removeAllBorderProperties()
			changeElementStyle(['border-left'], { value: borderStyleValue }, 'no_value')
			currentBorderSideValue = 'border-left'
			setButtonsBackgroundColor()
		})
	}

	if (borderRightBtn) {
		borderRightBtn.addEventListener('click', () => {
			const borderStyleValue = `${borderSizeInput.value == '' ? 1 : borderSizeInput.value}px ${borderStyleSelect.value} ${
				borderColorInput.value
			}`
			removeAllBorderProperties()
			changeElementStyle(['border-right'], { value: borderStyleValue }, 'no_value')
			currentBorderSideValue = 'border-right'
			setButtonsBackgroundColor()
		})
	}

	if (borderTopBtn) {
		borderTopBtn.addEventListener('click', () => {
			const borderStyleValue = `${borderSizeInput.value == '' ? 1 : borderSizeInput.value}px ${borderStyleSelect.value} ${
				borderColorInput.value
			}`
			removeAllBorderProperties()
			changeElementStyle(['border-top'], { value: borderStyleValue }, 'no_value')
			currentBorderSideValue = 'border-top'
			setButtonsBackgroundColor()
		})
	}

	if (borderBottomBtn) {
		borderBottomBtn.addEventListener('click', () => {
			const borderStyleValue = `${borderSizeInput.value == '' ? 1 : borderSizeInput.value}px ${borderStyleSelect.value} ${
				borderColorInput.value
			}`
			removeAllBorderProperties()
			changeElementStyle(['border-bottom'], { value: borderStyleValue }, 'no_value')
			currentBorderSideValue = 'border-bottom'
			setButtonsBackgroundColor()
		})
	}

	setButtonsBackgroundColor()
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

function removeAllBorderProperties() {
	let borderProperties = ['border-left', 'border-right', 'border-top', 'border-bottom', 'border']
	removeElementStyle(borderProperties)
	saveDataIntoElement()
}

function getCurrentBorder() {
	for (const key in ElementData.styles) {
		if (key.includes('border')) {
			currentBorderSideValue = key
			return
		}
	}

	currentBorderSideValue = 'border'
}

function setButtonsBackgroundColor() {
	if (currentBorderSideValue == 'border') {
		borderAllBtn.style.backgroundColor = 'var(--primary)'
	} else {
		borderAllBtn.style.backgroundColor = ''
	}

	if (currentBorderSideValue == 'border-left') {
		borderLeftBtn.style.backgroundColor = 'var(--primary)'
	} else {
		borderLeftBtn.style.backgroundColor = ''
	}

	if (currentBorderSideValue == 'border-right') {
		borderRightBtn.style.backgroundColor = 'var(--primary)'
	} else {
		borderRightBtn.style.backgroundColor = ''
	}

	if (currentBorderSideValue == 'border-bottom') {
		borderBottomBtn.style.backgroundColor = 'var(--primary)'
	} else {
		borderBottomBtn.style.backgroundColor = ''
	}

	if (currentBorderSideValue == 'border-top') {
		borderTopBtn.style.backgroundColor = 'var(--primary)'
	} else {
		borderTopBtn.style.backgroundColor = ''
	}
}
