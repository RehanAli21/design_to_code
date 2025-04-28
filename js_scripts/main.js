import PagesData from './data/page_data.js'
import { printCurrentPageHierarchy } from './show_elements_hierarchy.js'
import { printCurrentPageElements } from './show_elements_in_page.js'
import { showAvailableElements } from './show_elements_to_add.js'

function setPageState() {
	const page = document.getElementById('page')

	page.style.minWidth = PagesData.pageWidthMode + 'px'
}

export function reprintEveryThing() {
	setPageState()

	printCurrentPageHierarchy()

	printCurrentPageElements()

	showAvailableElements()
}

reprintEveryThing()
