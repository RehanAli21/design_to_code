import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

const selfAlignLeftBtn = document.getElementById('self_align_left')
const selfAlignRightBtn = document.getElementById('self_align_right')
const selfAlignCenterBtn = document.getElementById('self_align_center')

export default function setUpSelfAlignment() {
	selfAlignLeftBtn.addEventListener('click', () => {
		changeElementStyle(['margin-left'], { value: '0px' }, 'no_value')
		changeElementStyle(['margin-right'], { value: 'auto' }, 'no_value')
		saveDataIntoElement()
		setUpSelfAlignBtnBackground('left')
	})

	selfAlignCenterBtn.addEventListener('click', () => {
		changeElementStyle(['margin-left'], { value: 'auto' }, 'no_value')
		changeElementStyle(['margin-right'], { value: 'auto' }, 'no_value')
		saveDataIntoElement()
		setUpSelfAlignBtnBackground('center')
	})

	selfAlignRightBtn.addEventListener('click', () => {
		changeElementStyle(['margin-left'], { value: 'auto' }, 'no_value')
		changeElementStyle(['margin-right'], { value: '0px' }, 'no_value')
		saveDataIntoElement()
		setUpSelfAlignBtnBackground('right')
	})
}

export function setUpSelfAlignBtnBackground(currentSelfAlignValue) {
	if (currentSelfAlignValue == 'left') {
		selfAlignLeftBtn.style.backgroundColor = 'var(--primary)'
	} else {
		selfAlignLeftBtn.style.backgroundColor = ''
	}

	if (currentSelfAlignValue == 'center') {
		selfAlignCenterBtn.style.backgroundColor = 'var(--primary)'
	} else {
		selfAlignCenterBtn.style.backgroundColor = ''
	}

	if (currentSelfAlignValue == 'right') {
		selfAlignRightBtn.style.backgroundColor = 'var(--primary)'
	} else {
		selfAlignRightBtn.style.backgroundColor = ''
	}
}
