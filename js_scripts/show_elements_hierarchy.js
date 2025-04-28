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

		const p = document.createElement('p')

		p.innerText = child.name
		p.classList.add('caret')
		p.id = 'point_' + child.id

		if (child.id == ElementData.activeElementId) {
			p.classList.add('primary-color')
			p.classList.add('font-bold-700')
		}

		p.addEventListener('click', () => changeActiveElement(child.id))

		li.appendChild(p)

		if (child.can_have_children) {
			const internal_child = createChildrenForHierarchy(child.children)

			li.appendChild(internal_child)
		}

		ul.appendChild(li)
	}

	return ul
}
