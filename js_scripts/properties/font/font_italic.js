import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpFontStyle() {
	const fontItalicBtn = document.getElementById('font_italic_btn')
	const fontItalicCheckbox = document.getElementById('font_italic_checkbox')

	if (fontItalicBtn) {
		fontItalicBtn.addEventListener('click', () => {
			const isItalicApplied = fontItalicCheckbox.checked

			const styleValue = isItalicApplied ? '' : 'italic'

			changeElementStyle(['font-style'], { value: styleValue }, 'no_value')

			saveDataIntoElement()

			fontItalicCheckbox.checked = !isItalicApplied

			fontItalicBtn.style.backgroundColor = fontItalicCheckbox.checked ? 'var(--primary)' : ''
		})
	}
}
