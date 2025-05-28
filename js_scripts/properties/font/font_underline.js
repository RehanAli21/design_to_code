import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpFontUnderline() {
	const fontUnderlineBtn = document.getElementById('font_underline_btn')
	const fontUnderlineCheckbox = document.getElementById('font_underline_checkbox')

	if (fontUnderlineBtn) {
		fontUnderlineBtn.addEventListener('click', () => {
			const isItalicApplied = fontUnderlineCheckbox.checked

			const styleValue = isItalicApplied ? '' : 'underline'

			changeElementStyle(['text-decoration'], { value: styleValue }, 'no_value')

			saveDataIntoElement()

			fontUnderlineCheckbox.checked = !isItalicApplied

			fontUnderlineBtn.style.backgroundColor = fontUnderlineCheckbox.checked ? 'var(--primary)' : ''
		})
	}
}
