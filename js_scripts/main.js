import PagesData from './data/page_data.js'
import { printCurrentPageHierarchy } from './show_elements_hierarchy.js'

function setPageState() {
	const page = document.getElementById('page')

	page.style.minWidth = PagesData.pageWidthMode + 'px'
}

setPageState()

printCurrentPageHierarchy()
