import { PageModes } from './enums.js'
import { main_div_for_page } from '../elements/basic_div.js'

const PagesData = {
	pages: {
		home: {
			'background-color': 'white',
			children: [main_div_for_page()],
		},
	},
	activePage: 'home',
	pageWidthMode: PageModes.XSMALL,
	stylesPerViewMode: false,
}

export default PagesData
