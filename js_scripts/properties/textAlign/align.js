import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

const textAlignLeftBtn = document.getElementById('text_align_left')
const textAlignCenterBtn = document.getElementById('text_align_center')
const textAlignRightBtn = document.getElementById('text_align_right')
const textAlignJustifyBtn = document.getElementById('text_align_justify')

export default function setUpTextAlignment() {
	textAlignLeftBtn.addEventListener('click', () => {
		changeElementStyle(['text-align'], { value: 'left' }, 'no_value')
		saveDataIntoElement()
	})

	textAlignRightBtn.addEventListener('click', () => {
		changeElementStyle(['text-align'], { value: 'right' }, 'no_value')
		saveDataIntoElement()
	})

	textAlignCenterBtn.addEventListener('click', () => {
		changeElementStyle(['text-align'], { value: 'center' }, 'no_value')
		saveDataIntoElement()
	})

	textAlignJustifyBtn.addEventListener('click', () => {
		changeElementStyle(['text-align'], { value: 'justify' }, 'no_value')
		saveDataIntoElement()
	})
}
