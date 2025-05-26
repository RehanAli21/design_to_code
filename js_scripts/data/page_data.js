import { PageModes } from './enums.js'
import { main_div_for_page } from '../elements/basic_div.js'

const PagesData = {
	pages: {
		home: {
			background_color: '#ffffff',
			children: [main_div_for_page()],
		},
	},
	activePage: 'home',
	activePageWidthMode: PageModes.XSMALL,
	applyStylesOnAllWdiths: true,
}

export default PagesData
