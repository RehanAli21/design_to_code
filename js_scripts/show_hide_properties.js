const transformSectionHead = document.getElementById('transform_section_head')
let showTransformSectionProperties = true

const showProperties = {
	transform: true,
}

if (transformSectionHead) {
	toggleProperties(false, 'transform', 'transform_section', 'property_section', transformSectionHead)
	transformSectionHead.addEventListener('click', () =>
		toggleProperties(true, 'transform', 'transform_section', 'property_section', transformSectionHead)
	)
}

function toggleProperties(change, property, parentId, classOfElementToTogglevisibility, ele) {
	if (change) showProperties[property] = !showProperties[property]

	const parent = document.getElementById(parentId)

	if (parent) {
		for (let child of parent.children) {
			if (child.classList.contains(classOfElementToTogglevisibility)) {
				child.style.display = showProperties[property] ? '' : 'none'
			}
		}

		parent.style.paddingBottom = showProperties[property] ? '' : '10px'

		for (let child of ele.children) {
			child.innerHTML = showProperties[property] ? '\u25BC' : '\u25BA'
		}
	}
}
