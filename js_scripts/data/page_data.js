import { PageModes } from './enums.js'
import { main_div_for_page } from '../elements/basic_div.js'

const PagesData = {
	pages: {
		home: {
			'background-color': 'white',
			chlidren: [main_div_for_page()],
		},
	},
	activePage: 'home',
	pageWidthMode: PageModes.XSMALL,
}

export default PagesData
