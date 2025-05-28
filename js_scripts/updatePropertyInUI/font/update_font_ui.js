import { getStyles, splitValue } from '../updatePropertyUIUtils.js'

export default function updateFontUI() {
	const font_size_input = document.getElementById('font_size_input')
	const fontItalicBtn = document.getElementById('font_italic_btn')
	const fontItalicCheckbox = document.getElementById('font_italic_checkbox')
	const fontUnderlineBtn = document.getElementById('font_underline_btn')
	const fontUnderlineCheckbox = document.getElementById('font_underline_checkbox')
	const fontWeightSelect = document.getElementById('font_weight_select')

	const styles = getStyles()

	if (styles['font-size']) {
		const values = splitValue(styles['font-size'])
		font_size_input.value = values.number
	} else {
		font_size_input.value = ''
	}

	if (styles['font-style'] && styles['font-style'] != '') {
		fontItalicBtn.style.backgroundColor = 'var(--primary)'
		fontItalicCheckbox.checked = true
	} else {
		fontItalicBtn.style.backgroundColor = ''
		fontItalicCheckbox.checked = false
	}

	if (styles['text-decoration'] && styles['text-decoration'] != '') {
		fontUnderlineBtn.style.backgroundColor = 'var(--primary)'
		fontUnderlineCheckbox.checked = true
	} else {
		fontUnderlineBtn.style.backgroundColor = ''
		fontUnderlineCheckbox.checked = false
	}

	if (styles['font-weight']) {
		fontWeightSelect.value = styles['font-weight']
	} else {
		fontWeightSelect.value = 'normal'
	}
}
