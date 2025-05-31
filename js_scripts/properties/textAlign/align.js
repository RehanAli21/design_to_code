import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

const textAlignLeftBtn = document.getElementById('text_align_left')
const textAlignCenterBtn = document.getElementById('text_align_center')
const textAlignRightBtn = document.getElementById('text_align_right')
const textAlignJustifyBtn = document.getElementById('text_align_justify')

export default function setUpTextAlignment() {
	textAlignLeftBtn.addEventListener('click', () => {
		changeElementStyle(['text-align'], { value: 'left' }, 'no_value')
		saveDataIntoElement()
		setUpBtnBackground('left')
	})

	textAlignRightBtn.addEventListener('click', () => {
		changeElementStyle(['text-align'], { value: 'right' }, 'no_value')
		saveDataIntoElement()
		setUpBtnBackground('right')
	})

	textAlignCenterBtn.addEventListener('click', () => {
		changeElementStyle(['text-align'], { value: 'center' }, 'no_value')
		saveDataIntoElement()
		setUpBtnBackground('center')
	})

	textAlignJustifyBtn.addEventListener('click', () => {
		changeElementStyle(['text-align'], { value: 'justify' }, 'no_value')
		saveDataIntoElement()
		setUpBtnBackground('justify')
	})
}

function setUpBtnBackground(currentAlignValue) {
	if (currentAlignValue == 'left') {
		textAlignLeftBtn.style.backgroundColor = 'var(--primary)'
	} else {
		textAlignLeftBtn.style.backgroundColor = ''
	}

	if (currentAlignValue == 'right') {
		textAlignRightBtn.style.backgroundColor = 'var(--primary)'
	} else {
		textAlignRightBtn.style.backgroundColor = ''
	}

	if (currentAlignValue == 'center') {
		textAlignCenterBtn.style.backgroundColor = 'var(--primary)'
	} else {
		textAlignCenterBtn.style.backgroundColor = ''
	}

	if (currentAlignValue == 'justify') {
		textAlignJustifyBtn.style.backgroundColor = 'var(--primary)'
	} else {
		textAlignJustifyBtn.style.backgroundColor = ''
	}
}
