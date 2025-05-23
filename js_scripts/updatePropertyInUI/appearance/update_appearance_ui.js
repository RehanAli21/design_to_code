import { getStyles } from '../updatePropertyUIUtils.js'

export default function UpdateAppearnceUI() {
	const bgColorInput = document.getElementById('appeareance_color_input')

	const styles = getStyles()

	if (styles['background-color']) {
		bgColorInput.value = styles['background-color']
	} else {
		bgColorInput.value = '#000000'
	}
}
