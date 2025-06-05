import { ElementData } from '../../data/element_data.js'

const innerTextArea = document.getElementById('text_property_textarea')

export default function innerText() {
	innerTextArea.addEventListener('input', e => {
		changeInnerText(e)
	})
}

function changeInnerText(e) {
	const ele = document.getElementById(ElementData.activeElementId)

	if (ele) {
		ele.innerText = e.target.value
	}
}
