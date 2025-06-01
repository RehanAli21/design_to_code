import { setUpTextAlignBtnBackground } from '../../properties/textAlign/align.js'
import { getStyles } from '../updatePropertyUIUtils.js'

export default function updateTextAlignUI() {
	const textAlignLeftBtn = document.getElementById('text_align_left')
	const textAlignCenterBtn = document.getElementById('text_align_center')
	const textAlignRightBtn = document.getElementById('text_align_right')
	const textAlignJustifyBtn = document.getElementById('text_align_justify')

	const styles = getStyles()

	if (styles['text-align']) {
		setUpTextAlignBtnBackground(styles['text-align'])
	} else {
		textAlignLeftBtn.style.backgroundColor = ''
		textAlignCenterBtn.style.backgroundColor = ''
		textAlignRightBtn.style.backgroundColor = ''
		textAlignJustifyBtn.style.backgroundColor = ''
	}
}
