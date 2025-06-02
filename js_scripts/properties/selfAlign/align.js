import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

const selfAlignLeftBtn = document.getElementById('self_align_left')
const selfAlignRightBtn = document.getElementById('self_align_right')
const selfAlignCenterBtn = document.getElementById('self_align_center')

export default function setUpSelfAlignment() {
	selfAlignLeftBtn.addEventListener('click', () => {
		changeElementStyle(['margin-left'], { value: '0px' }, 'no_value')
		changeElementStyle(['margin-right'], { value: 'auto' }, 'no_value')
		saveDataIntoElement()
	})

	selfAlignCenterBtn.addEventListener('click', () => {
		changeElementStyle(['margin-left'], { value: 'auto' }, 'no_value')
		changeElementStyle(['margin-right'], { value: 'auto' }, 'no_value')
		saveDataIntoElement()
	})

	selfAlignRightBtn.addEventListener('click', () => {
		changeElementStyle(['margin-left'], { value: 'auto' }, 'no_value')
		changeElementStyle(['margin-right'], { value: '0px' }, 'no_value')
		saveDataIntoElement()
	})
}
