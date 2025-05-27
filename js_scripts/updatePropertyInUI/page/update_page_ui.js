import PagesData from '../../data/page_data.js'

export default function updatePageUI() {
	const colorInput = document.getElementById('page_color_input')

	const backgroundColor = PagesData.pages[PagesData.activePage]['background_color']

	colorInput.value = backgroundColor ? backgroundColor : '#ffffff'
}
