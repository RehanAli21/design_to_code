import { toggleBorderStyles } from '../../properties/appearance/border.js'
import { toggleShadowStyles } from '../../properties/appearance/shadow.js'
import { findStyleUsingSubstringWithNotFilter, getStyles, splitValue, splitValueIn3, splitValueIn4 } from '../updatePropertyUIUtils.js'

export default function updateAppearnceUI() {
	const bgColorInput = document.getElementById('appeareance_color_input')
	const innerXSpaceInput = document.getElementById('appeareance_inner_x_input')
	const innerXSpaceSelect = document.getElementById('appeareance_inner_x_select')
	const innerYSpaceInput = document.getElementById('appeareance_inner_y_input')
	const innerYSpaceSelect = document.getElementById('appeareance_inner_y_select')

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

	updateBorder(styles)

	updateShadow(styles)
}

function updateBorder(styles) {
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

function updateShadow(styles) {
	const shadowToggler = document.getElementById('appeareance_shadow_toggle')
	const shadowColorInput = document.getElementById('appeareance_shadow_color_input')
	const shadowXInput = document.getElementById('appeareance_shadow_x')
	const shadowYInput = document.getElementById('appeareance_shadow_y')
	const shadowBlurInput = document.getElementById('appeareance_shadow_b')

	if (styles['box-shadow']) {
		const values = splitValueIn4(styles['box-shadow'])

		if (values != null) {
			const xValues = splitValue(values.first)

			if (xValues != null) {
				shadowXInput.value = xValues.number
			} else {
				shadowXInput.value = ''
			}

			const yValues = splitValue(values.second)

			if (yValues != null) {
				shadowYInput.value = yValues.number
			} else {
				shadowYInput.value = ''
			}

			const bValues = splitValue(values.third)

			if (bValues != null) {
				shadowBlurInput.value = bValues.number
			} else {
				shadowBlurInput.value = ''
			}

			shadowColorInput.value = values.fourth
		} else {
			resetShadowValues()
		}

		toggleShadowStyles(shadowToggler, true)

		if (!shadowToggler.checked) {
			shadowToggler.checked = true
		}
	} else {
		resetShadowValues()

		toggleShadowStyles(shadowToggler, false)

		if (shadowToggler.checked) {
			shadowToggler.checked = false
		}
	}

	function resetShadowValues() {
		shadowColorInput.value = '#000000'
		shadowBlurInput.value = ''
		shadowXInput.value = ''
		shadowYInput.value = ''
	}
}
