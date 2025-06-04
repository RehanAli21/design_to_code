const pageSectionHead = document.getElementById('page_section_head')
const transformSectionHead = document.getElementById('transform_section_head')
const appearanceSectionHead = document.getElementById('appeareance_section_head')
const textSectionHead = document.getElementById('text_section_head')
const fontSectionHead = document.getElementById('font_section_head')
const textAlignSectionHead = document.getElementById('text_align_section_head')
const selfAlignSectionHead = document.getElementById('self_align_section_head')

const showProperties = {
	page: false,
	transform: false,
	appearance: false,
	text: false,
	font: false,
	text_align: false,
	self_align: true,
}

if (transformSectionHead) {
	toggleProperties(false, 'transform', 'transform_section', ['property_section'], transformSectionHead)
	transformSectionHead.addEventListener('click', () =>
		toggleProperties(true, 'transform', 'transform_section', ['property_section'], transformSectionHead)
	)
}

if (appearanceSectionHead) {
	toggleProperties(false, 'appearance', 'appeareance_section', ['property_section', 'property_section_no_class'], appearanceSectionHead)
	appearanceSectionHead.addEventListener('click', () =>
		toggleProperties(true, 'appearance', 'appeareance_section', ['property_section', 'property_section_no_class'], appearanceSectionHead)
	)
}

if (textSectionHead) {
	toggleProperties(false, 'text', 'text_section', ['property_section', 'property_section_no_class'], textSectionHead)
	textSectionHead.addEventListener('click', () =>
		toggleProperties(true, 'text', 'text_section', ['property_section', 'property_section_no_class'], textSectionHead)
	)
}

if (fontSectionHead) {
	toggleProperties(false, 'font', 'font_section', ['property_section', 'property_section_no_class'], fontSectionHead)
	fontSectionHead.addEventListener('click', () =>
		toggleProperties(true, 'font', 'font_section', ['property_section', 'property_section_no_class'], fontSectionHead)
	)
}

if (textAlignSectionHead) {
	toggleProperties(false, 'text_align', 'text_align_section', ['property_section', 'property_section_no_class'], textAlignSectionHead)
	textAlignSectionHead.addEventListener('click', () =>
		toggleProperties(true, 'text_align', 'text_align_section', ['property_section', 'property_section_no_class'], textAlignSectionHead)
	)
}

if (selfAlignSectionHead) {
	toggleProperties(false, 'self_align', 'self_align_section', ['property_section', 'property_section_no_class'], selfAlignSectionHead)
	selfAlignSectionHead.addEventListener('click', () =>
		toggleProperties(true, 'self_align', 'self_align_section', ['property_section', 'property_section_no_class'], selfAlignSectionHead)
	)
}

if (pageSectionHead) {
	toggleProperties(false, 'page', 'page_section', ['property_section', 'property_section_no_class'], pageSectionHead)
	pageSectionHead.addEventListener('click', () =>
		toggleProperties(true, 'page', 'page_section', ['property_section', 'property_section_no_class'], pageSectionHead)
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
