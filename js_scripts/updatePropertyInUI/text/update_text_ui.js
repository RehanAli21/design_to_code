import { toggleShadowStyles } from '../../properties/text/shadow.js'
import { getStyles, splitValue, splitValueIn4 } from '../updatePropertyUIUtils.js'

export default function updateTextUI() {
	const colorInput = document.getElementById('text_color_input')
	const lineHeightInput = document.getElementById('text_line_height_input')
	const wordSpaceInput = document.getElementById('text_word_space_input')
	const letterSpaceInput = document.getElementById('text_letter_space_input')

	const styles = getStyles()

	if (styles['color']) {
		colorInput.value = styles['color']
	} else {
		colorInput.value = '#000000'
	}

	if (styles['line-height']) {
		const value = splitValue(styles['line-height'])

		if (value != null) {
			lineHeightInput.value = value.number
		}
	} else {
		lineHeightInput.value = ''
	}

	if (styles['word-spacing']) {
		const value = splitValue(styles['word-spacing'])

		if (value != null) {
			wordSpaceInput.value = value.number
		}
	} else {
		wordSpaceInput.value = ''
	}

	if (styles['letter-spacing']) {
		const value = splitValue(styles['letter-spacing'])

		if (value != null) {
			letterSpaceInput.value = value.number
		}
	} else {
		letterSpaceInput.value = ''
	}

	updateShadow(styles)
}

function updateShadow(styles) {
	const shadowToggler = document.getElementById('text_shadow_toggle')
	const shadowColorInput = document.getElementById('text_shadow_color_input')
	const shadowXInput = document.getElementById('text_shadow_x')
	const shadowYInput = document.getElementById('text_shadow_y')
	const shadowBlurInput = document.getElementById('text_shadow_b')

	if (styles['text-shadow']) {
		const values = splitValueIn4(styles['text-shadow'])

		if (values != null) {
			const xValues = splitValue(values.first)

			if (xValues != null) {
				console.log(shadowXInput, xValues)
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
