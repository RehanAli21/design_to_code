import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

const normalTextBtn = document.getElementById('text_transform_none')
const lowerTextBtn = document.getElementById('text_transform_lower')
const upperTextBtn = document.getElementById('text_transform_upper')
const capitalTextBtn = document.getElementById('text_transform_capital')

let textTransformMode = 'normal'

export default function setUpTextCase() {
	normalTextBtn.addEventListener('click', () => {
		changeElementStyle(['text-transform'], { value: '' }, 'no_value')
		saveDataIntoElement()
		textTransformMode = 'normal'
		setButtonsBackgroundColor()
	})

	lowerTextBtn.addEventListener('click', () => {
		changeElementStyle(['text-transform'], { value: 'lowercase' }, 'no_value')
		saveDataIntoElement()
		textTransformMode = 'lowercase'
		setButtonsBackgroundColor()
	})

	upperTextBtn.addEventListener('click', () => {
		changeElementStyle(['text-transform'], { value: 'uppercase' }, 'no_value')
		saveDataIntoElement()
		textTransformMode = 'uppercase'
		setButtonsBackgroundColor()
	})

	capitalTextBtn.addEventListener('click', () => {
		changeElementStyle(['text-transform'], { value: 'capitalize' }, 'no_value')
		saveDataIntoElement()
		textTransformMode = 'capitalize'
		setButtonsBackgroundColor()
	})

	setButtonsBackgroundColor()
}

function setButtonsBackgroundColor() {
	if (textTransformMode == 'normal') {
		normalTextBtn.style.backgroundColor = 'var(--primary)'
	} else {
		normalTextBtn.style.backgroundColor = ''
	}

	if (textTransformMode == 'lowercase') {
		lowerTextBtn.style.backgroundColor = 'var(--primary)'
	} else {
		lowerTextBtn.style.backgroundColor = ''
	}

	if (textTransformMode == 'uppercase') {
		upperTextBtn.style.backgroundColor = 'var(--primary)'
	} else {
		upperTextBtn.style.backgroundColor = ''
	}

	if (textTransformMode == 'capitalize') {
		capitalTextBtn.style.backgroundColor = 'var(--primary)'
	} else {
		capitalTextBtn.style.backgroundColor = ''
	}
}
