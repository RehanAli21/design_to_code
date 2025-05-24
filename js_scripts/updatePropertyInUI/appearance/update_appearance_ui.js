import { toggleBorderStyles } from '../../properties/appearance/border.js'
import { findStyleUsingSubstringWithNotFilter, getStyles, splitValue, splitValueIn3 } from '../updatePropertyUIUtils.js'

export default function UpdateAppearnceUI() {
	const bgColorInput = document.getElementById('appeareance_color_input')
	const innerXSpaceInput = document.getElementById('appeareance_inner_x_input')
	const innerXSpaceSelect = document.getElementById('appeareance_inner_x_select')
	const innerYSpaceInput = document.getElementById('appeareance_inner_y_input')
	const innerYSpaceSelect = document.getElementById('appeareance_inner_y_select')
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

	const styles = getStyles()

	if (styles['background-color']) {
		bgColorInput.value = styles['background-color']
	} else {
		bgColorInput.value = '#000000'
	}

	if (styles['padding-left']) {
		const value = splitValue(styles['padding-left'])

		if (value != null) {
			innerXSpaceInput.value = value.number
			innerXSpaceSelect.value = value.unit
		}
	} else {
		innerXSpaceInput.value = ''
		innerXSpaceSelect.value = 'px'
	}

	if (styles['padding-top']) {
		const value = splitValue(styles['padding-top'])

		if (value != null) {
			innerYSpaceInput.value = value.number
			innerYSpaceSelect.value = value.unit
		}
	} else {
		innerYSpaceInput.value = ''
		innerYSpaceSelect.value = 'px'
	}

	const borderStyleValue = findStyleUsingSubstringWithNotFilter('border', 'radius', styles)
	let isBorderStylesPresent = false

	if (borderStyleValue) {
		isBorderStylesPresent = true
		const parts = splitValueIn3(styles[borderStyleValue])

		if (parts != null) {
			const values = splitValue(parts.first)

			if (values != null) {
				borderSizeInput.value = values.number
			} else {
				borderSizeInput.value = ''
			}

			borderStyleSelect.value = parts.second
			borderColorInput.value = parts.third
		}
	} else {
		borderSizeInput.value = ''
		borderStyleSelect.value = 'solid'
		borderColorInput.value = '#000000'
	}

	if (styles['border-radius']) {
		isBorderStylesPresent = true
		const values = splitValue(styles['border-radius'])

		if (values != null) {
			borderRadiusInput.value = values.number
		}
	} else {
		borderRadiusInput.value = ''
	}

	// this is added because there is an evenet listener which add or remove border if borderToggle state change
	if (borderToggler.checked != isBorderStylesPresent) {
		borderToggler.checked = isBorderStylesPresent
	}

	let isAllBorderApplied = true

	if (styles['border-left']) {
		isAllBorderApplied = false
		borderLeftBtn.style.backgroundColor = 'var(--primary)'
	} else {
		borderLeftBtn.style.backgroundColor = ''
	}

	if (styles['border-right']) {
		isAllBorderApplied = false
		borderRightBtn.style.backgroundColor = 'var(--primary)'
	} else {
		borderRightBtn.style.backgroundColor = ''
	}

	if (styles['border-top']) {
		isAllBorderApplied = false
		borderTopBtn.style.backgroundColor = 'var(--primary)'
	} else {
		borderTopBtn.style.backgroundColor = ''
	}

	if (styles['border-bottom']) {
		isAllBorderApplied = false
		borderBottomBtn.style.backgroundColor = 'var(--primary)'
	} else {
		borderBottomBtn.style.backgroundColor = ''
	}

	if (isAllBorderApplied) {
		borderAllBtn.style.backgroundColor = 'var(--primary)'
	} else {
		borderAllBtn.style.backgroundColor = ''
	}

	toggleBorderStyles(borderToggler, isBorderStylesPresent)
}
