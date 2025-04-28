import PagesData from './data/page_data.js'
import { ElementData } from './data/element_data.js'
import { changeActiveElement } from './element_manager.js'

export function printCurrentPageHierarchy() {
	const page = PagesData.pages[PagesData.activePage]

	const hierarchy_div = document.getElementById('hierarchy_div')

	if (hierarchy_div) {
		const ele = createChildrenForHierarchy(page.children)

		hierarchy_div.innerHTML = ''

		hierarchy_div.appendChild(ele)
	}
}

function createChildrenForHierarchy(children) {
	const ul = document.createElement('ul')
	ul.classList.add('tree')

	for (let child of children) {
		const li = document.createElement('li')

		const div = document.createElement('div')

		div.style.display = 'grid'
		div.style.gridTemplateColumns = '20px auto'

		if (child.can_have_children) {
			const button = document.createElement('button')

			button.innerText = child.showChildrenInHeirarchy ? '\u25BC' : '\u25BA'

			button.addEventListener('click', () => {
				toggleShowChildrenInHierarchy(child.id, null)
				printCurrentPageHierarchy()
			})

			button.style.border = 'none'
			button.style.cursor = 'pointer'

			div.appendChild(button)
		}

		const p = document.createElement('p')

		p.classList.add('caret')
		p.id = 'point_' + child.id

		if (child.id == ElementData.activeElementId) {
			p.classList.add('primary-color')
			p.classList.add('font-bold-700')
		}

		p.addEventListener('click', () => changeActiveElement(child.id))

		p.innerText = child.name
		div.appendChild(p)

		li.appendChild(div)

		if (child.can_have_children && child.showChildrenInHeirarchy) {
			const internal_child = createChildrenForHierarchy(child.children)

			li.appendChild(internal_child)
		}

		ul.appendChild(li)
	}

	return ul
}

function toggleShowChildrenInHierarchy(element_id, children) {
	if (children == null) {
		children = PagesData.pages[PagesData.activePage].children
	}

	for (let child of children) {
		if (child.can_have_children) {
			if (child.id == element_id) {
				child.showChildrenInHeirarchy = !child.showChildrenInHeirarchy
				return true
			}

			if (toggleShowChildrenInHierarchy(element_id, child.children)) {
				return true
			}
		}
	}

	return false
}
