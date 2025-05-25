import updateAppearnceUI from './appearance/update_appearance_ui.js'
import updateTextUI from './text/update_text_ui.js'
import updateTransformsUI from './transform/update_transform_ui.js'

export default function mainUpdatePropertiesFunc() {
	updateTransformsUI()
	updateAppearnceUI()
	updateTextUI()
}
