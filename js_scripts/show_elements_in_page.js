import PagesData from './data/page_data.js'
import { ElementData } from './data/element_data.js'
import { changeActiveElement } from './element_manager.js'
import { ElementTags, PageModes } from './data/enums.js'

export function printCurrentPageElements() {
	const div = document.getElementById('page')
	const page = PagesData.pages[PagesData.activePage]

	div.style.backgroundColor = page['background_color'] ? page['background_color'] : '#ffffff'

	if (div) {
		div.innerHTML = ''

		if (ElementData.activeElementId == 'page') {
			div.classList.add('outlined')
		} else {
			div.classList.remove('outlined')
		}

		const children = creatChildrenForPage(page.children)

		for (let child of children) {
			div.appendChild(child)
		}
	}
}

function creatChildrenForPage(children) {
	const children_element = []

	for (let child of children) {
		let tagName = ''

		if (child.tagName == ElementTags.TEXT) {
			tagName = child.type
		} else {
			tagName = child.tagName
		}

		const ele = document.createElement(tagName)
		ele.id = child.id
		ele.innerText = child.innerText

		const styles = getStyles(child)

		for (const styleProperty in styles) {
			ele.style[styleProperty] = styles[styleProperty]
		}

		// before adding in this function add attributes here and move to function
		// because here you can see attributes correctly
		specificAttributesForElements(ele, child)

		if (ElementData.activeElementId == child.id) {
			ele.classList.add('outlined')
		}

		for (let c in child.classes) {
			ele.appendChild(c)
		}

		ele.addEventListener('click', e => {
			e.stopPropagation() // 🛑 Stops it from reaching parent
			changeActiveElement(child.id)
		})

		if (child.can_have_children) {
			const internal_children = creatChildrenForPage(child.children)

			for (let internal_child of internal_children) {
				// this is required to assign options same color as select so,
				// that user does not have to assign color to each option for select
				// if current ele is "select" and then setting every "option" child element color same as select color
				if (ele.tagName == 'SELECT' && internal_child.tagName == 'OPTION') {
					internal_child.style.color = ele.style.color
				}

				ele.appendChild(internal_child)
			}
		}

		children_element.push(ele)
	}

	return children_element
}

function specificAttributesForElements(ele, child) {
	if (child.tagName == ElementTags.INPUT) {
		ele.type = child.inputType
		ele.placeholder = child.placeholder
		ele.defaultValue = child.defaultValue
		ele.min = child.min
		ele.max = child.max
		ele.readonly = child.readonly
		ele.disabled = child.disabled
		ele.autocomplete = child.autocomplete
	} else if (child.tagName == ElementTags.TEXT) {
		if (child.type == 'a') {
			ele.href = child.href
		}
	} else if (child.tagName == ElementTags.OPTION) {
		ele.value = child.option_value
	}

	return ele
}

function getStyles(child) {
	let styles = {}

	if (PagesData.activePageWidthMode == PageModes.XSMALL) styles = child.styles.xsmall
	else if (PagesData.activePageWidthMode == PageModes.SMALL) styles = child.styles.small
	else if (PagesData.activePageWidthMode == PageModes.MEDIUM) styles = child.styles.medium
	else if (PagesData.activePageWidthMode == PageModes.LARGE) styles = child.styles.large
	else if (PagesData.activePageWidthMode == PageModes.XLARGE) styles = child.styles.xlarge

	return styles
}
