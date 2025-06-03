import { setUpSelfAlignBtnBackground } from '../../properties/selfAlign/align.js'
import { getStyles } from '../updatePropertyUIUtils.js'

export default function updateSelfAlignUI() {
	const selfAlignLeftBtn = document.getElementById('self_align_left')
	const selfAlignRightBtn = document.getElementById('self_align_right')
	const selfAlignCenterBtn = document.getElementById('self_align_center')

	const styles = getStyles()

	if (styles['margin-left'] && styles['margin-right']) {
		if (styles['margin-left'] == '0px' && styles['margin-right'] == 'auto') {
			setUpSelfAlignBtnBackground('left')
		} else if (styles['margin-left'] == 'auto' && styles['margin-right'] == 'auto') {
			setUpSelfAlignBtnBackground('center')
		} else if (styles['margin-left'] == 'auto' && styles['margin-right'] == '0px') {
			setUpSelfAlignBtnBackground('right')
		}
	} else {
		selfAlignLeftBtn.style.backgroundColor = ''
		selfAlignCenterBtn.style.backgroundColor = ''
		selfAlignRightBtn.style.backgroundColor = ''
	}
}
