import PagesData from './data/page_data.js'

function setPageState() {
	const page = document.getElementById('page')

	page.style.minWidth = PagesData.pageWidthMode + 'px'
}

setPageState()
