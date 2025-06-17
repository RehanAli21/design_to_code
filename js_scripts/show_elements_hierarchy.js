import PagesData from './data/page_data.js'
import { ElementData } from './data/element_data.js'
import { changeActiveElement, deleteElement } from './element_manager.js'

export function printCurrentPageHierarchy() {
	const page = PagesData.pages[PagesData.activePage]

	const hierarchy_div = document.getElementById('hierarchy_div')

	if (hierarchy_div) {
		const ele = createChildrenForHierarchy(page.children)

		hierarchy_div.innerHTML = ''

		const p = document.createElement('p')

		p.classList.add('caret')
		p.id = 'point_page'

		if ('page' == ElementData.activeElementId) {
			p.classList.add('primary-color')
			p.classList.add('font-bold-700')
		}

		p.addEventListener('click', () => changeActiveElement('page'))

		p.innerText = PagesData.activePage.toUpperCase()

		hierarchy_div.appendChild(p)

		const ul = document.createElement('ul')
		const li = document.createElement('li')
		li.appendChild(ele)
		ul.appendChild(li)

		hierarchy_div.appendChild(ul)
	}
}

function createChildrenForHierarchy(children) {
	const ul = document.createElement('ul')
	ul.classList.add('tree')

	for (let child of children) {
		const li = document.createElement('li')

		const div = document.createElement('div')
		div.classList.add('hierarchy_div')

		div.style.display = 'grid'
		div.style.gridTemplateColumns = '25px auto 30px'

		const toggleChildrenBtn = document.createElement('button')

		if (child.can_have_children) {
			toggleChildrenBtn.innerText = child.showChildrenInHeirarchy ? '\u25BC' : '\u25BA'

			toggleChildrenBtn.style.fontSize = '10px'

			toggleChildrenBtn.addEventListener('click', () => {
				toggleShowChildrenInHierarchy(child.id, null)
				printCurrentPageHierarchy()
			})
		}

		toggleChildrenBtn.style.border = 'none'
		toggleChildrenBtn.style.cursor = 'pointer'

		div.appendChild(toggleChildrenBtn)

		const p = document.createElement('p')

		p.classList.add('caret')
		p.id = 'point_' + child.id

		if (child.id == ElementData.activeElementId) {
			p.classList.add('primary-color')
			p.classList.add('font-bold-700')
		}

		p.addEventListener('click', () => changeActiveElement(child.id))

		p.innerText = child.name
		p.style.backgroundColor = 'var(--background)'
		p.style.marginLeft = '-5px'
		div.appendChild(p)

		const deleteButton = document.createElement('button')
		deleteButton.innerText = '🗑'

		deleteButton.style.border = 'none'
		deleteButton.style.cursor = 'pointer'
		deleteButton.style.backgroundColor = 'var(--danger-color)'
		deleteButton.style.fontWeight = 'bolder'

		deleteButton.addEventListener('click', () => deleteElement(child.id))

		div.append(deleteButton)

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
