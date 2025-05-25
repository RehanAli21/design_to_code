const transformSectionHead = document.getElementById('transform_section_head')
const appearanceSectionHead = document.getElementById('appeareance_section_head')
const textSectionHead = document.getElementById('text_section_head')

const showProperties = {
	transform: true,
	appearance: true,
	text: true,
}

if (transformSectionHead) {
	toggleProperties(false, 'transform', 'transform_section', ['property_section'], transformSectionHead)
	transformSectionHead.addEventListener('click', () =>
		toggleProperties(true, 'transform', 'transform_section', ['property_section'], transformSectionHead)
	)
}

if (appearanceSectionHead) {
	toggleProperties(false, 'transform', 'appeareance_section', ['property_section', 'property_section_no_class'], appearanceSectionHead)
	appearanceSectionHead.addEventListener('click', () =>
		toggleProperties(true, 'transform', 'appeareance_section', ['property_section', 'property_section_no_class'], appearanceSectionHead)
	)
}

if (textSectionHead) {
	toggleProperties(false, 'transform', 'text_section', ['property_section', 'property_section_no_class'], textSectionHead)
	textSectionHead.addEventListener('click', () =>
		toggleProperties(true, 'transform', 'text_section', ['property_section', 'property_section_no_class'], textSectionHead)
	)
}

function toggleProperties(change, property, parentId, classesOfElementToTogglevisibility, ele) {
	if (change) showProperties[property] = !showProperties[property]

	const parent = document.getElementById(parentId)

	if (parent) {
		for (let child of parent.children) {
			for (let classOfElementToTogglevisibility of classesOfElementToTogglevisibility) {
				if (child.classList.contains(classOfElementToTogglevisibility)) {
					child.style.display = showProperties[property] ? '' : 'none'
				}
			}
		}

		parent.style.paddingBottom = showProperties[property] ? '' : '10px'

		for (let child of ele.children) {
			child.innerHTML = showProperties[property] ? '\u25BC' : '\u25BA'
		}
	}
}
