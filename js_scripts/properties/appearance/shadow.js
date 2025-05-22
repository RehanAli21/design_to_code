import { changeElementStyle, saveDataIntoElement } from '../property_base.js'

const shadowColorInput = document.getElementById('appeareance_shadow_color_input')
const shadowXInput = document.getElementById('appeareance_shadow_x')
const shadowYInput = document.getElementById('appeareance_shadow_y')
const shadowBlurInput = document.getElementById('appeareance_shadow_b')

export default function setUpShadow() {
	const shadowToggler = document.getElementById('appeareance_shadow_toggle')

	if (shadowToggler) {
		shadowToggler.addEventListener('focusout', saveDataIntoElement)

		toggleBorderStyles(shadowToggler)

		shadowToggler.addEventListener('change', () => toggleBorderStyles(shadowToggler))
	}

	if (shadowColorInput) {
		shadowColorInput.addEventListener('focusout', () => saveDataIntoElement())

		shadowColorInput.addEventListener('input', () => {
			const shadowValue = `${shadowXInput.value != '' ? shadowXInput.value : '1'}px ${shadowYInput.value != '' ? shadowYInput.value : '1'}px ${
				shadowBlurInput.value != '' ? shadowBlurInput.value : '1'
			}px ${shadowColorInput.value != '' ? shadowColorInput.value : 'black'}`
			changeElementStyle(['box-shadow'], { value: shadowValue }, 'no_value')
		})
	}

	if (shadowXInput) {
		shadowXInput.addEventListener('focusout', () => saveDataIntoElement())

		shadowXInput.addEventListener('input', () => {
			const shadowValue = `${shadowXInput.value != '' ? shadowXInput.value : '1'}px ${shadowYInput.value != '' ? shadowYInput.value : '1'}px ${
				shadowBlurInput.value != '' ? shadowBlurInput.value : '1'
			}px ${shadowColorInput.value != '' ? shadowColorInput.value : 'black'}`
			changeElementStyle(['box-shadow'], { value: shadowValue }, 'no_value')
		})
	}

	if (shadowYInput) {
		shadowYInput.addEventListener('focusout', () => saveDataIntoElement())

		shadowYInput.addEventListener('input', () => {
			const shadowValue = `${shadowXInput.value != '' ? shadowXInput.value : '1'}px ${shadowYInput.value != '' ? shadowYInput.value : '1'}px ${
				shadowBlurInput.value != '' ? shadowBlurInput.value : '1'
			}px ${shadowColorInput.value != '' ? shadowColorInput.value : 'black'}`
			changeElementStyle(['box-shadow'], { value: shadowValue }, 'no_value')
		})
	}

	if (shadowBlurInput) {
		shadowBlurInput.addEventListener('focusout', () => saveDataIntoElement())

		shadowBlurInput.addEventListener('input', () => {
			const shadowValue = `${shadowXInput.value != '' ? shadowXInput.value : '1'}px ${shadowYInput.value != '' ? shadowYInput.value : '1'}px ${
				shadowBlurInput.value != '' ? shadowBlurInput.value : '1'
			}px ${shadowColorInput.value != '' ? shadowColorInput.value : 'black'}`
			changeElementStyle(['box-shadow'], { value: shadowValue }, 'no_value')
		})
	}
}

function toggleBorderStyles(shadowToggler) {
	for (const child of shadowToggler.parentElement.parentElement.children) {
		if (child.classList.contains('property_section')) {
			child.style.display = shadowToggler.checked ? '' : 'none'
		}
	}

	const shadowValue = shadowToggler.checked
		? `${shadowXInput.value != '' ? shadowXInput.value : '1'}px ${shadowYInput.value != '' ? shadowYInput.value : '1'}px ${
				shadowBlurInput.value != '' ? shadowBlurInput.value : '1'
		  }px ${shadowColorInput.value != '' ? shadowColorInput.value : 'black'}`
		: ''

	changeElementStyle(['box-shadow'], { value: shadowValue }, 'no_value')
}
