import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

export default function setUpShadow() {
	const shadowToggler = document.getElementById('appeareance_shadow_toggle')

	if (shadowToggler) {
		toggleBorderStyles(shadowToggler)

		shadowToggler.addEventListener('change', () => toggleBorderStyles(shadowToggler))
	}
}

function toggleBorderStyles(shadowToggler) {
	for (const child of shadowToggler.parentElement.parentElement.children) {
		if (child.classList.contains('property_section')) {
			child.style.display = shadowToggler.checked ? '' : 'none'
		}
	}
}
