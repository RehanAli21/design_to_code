import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpLettersSpace() {
	const letterSpaceInput = document.getElementById('text_letter_space_input')

	if (letterSpaceInput) {
		letterSpaceInput.addEventListener('focusout', saveDataIntoElement)
		letterSpaceInput.addEventListener('input', () => changeElementStyle(['letter-spacing'], { value: `${letterSpaceInput.value}px` }, 'no_value'))
	}
}
