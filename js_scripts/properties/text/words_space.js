import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpWordsSpace() {
	const wordSpaceInput = document.getElementById('text_word_space_input')

	if (wordSpaceInput) {
		wordSpaceInput.addEventListener('focusout', saveDataIntoElement)
		wordSpaceInput.addEventListener('input', () => changeElementStyle(['word-spacing'], { value: `${wordSpaceInput.value}px` }, 'no_value'))
	}
}
