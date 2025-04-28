import PagesData from './data/page_data.js'
import { printCurrentPageHierarchy } from './show_elements_hierarchy.js'
import { printCurrentPageElements } from './show_elements_in_page.js'

function setPageState() {
	const page = document.getElementById('page')

	page.style.minWidth = PagesData.pageWidthMode + 'px'
}

setPageState()

printCurrentPageHierarchy()

printCurrentPageElements()
