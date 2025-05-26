const pageSectionHead = document.getElementById('page_section_head')
const transformSectionHead = document.getElementById('transform_section_head')
const appearanceSectionHead = document.getElementById('appeareance_section_head')
const textSectionHead = document.getElementById('text_section_head')
const fontSectionHead = document.getElementById('font_section_head')

const showProperties = {
	page: true,
	transform: true,
	appearance: true,
	text: true,
	font: true,
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

if (fontSectionHead) {
	toggleProperties(false, 'transform', 'font_section', ['property_section', 'property_section_no_class'], fontSectionHead)
	fontSectionHead.addEventListener('click', () =>
		toggleProperties(true, 'transform', 'font_section', ['property_section', 'property_section_no_class'], fontSectionHead)
	)
}

if (pageSectionHead) {
	toggleProperties(false, 'transform', 'page_section', ['property_section', 'property_section_no_class'], pageSectionHead)
	pageSectionHead.addEventListener('click', () =>
		toggleProperties(true, 'transform', 'page_section', ['property_section', 'property_section_no_class'], pageSectionHead)
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
