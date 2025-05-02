import { ElementData } from './data/element_data.js'
import { ElementTags } from './data/enums.js'
import { printCurrentPageHierarchy } from './show_elements_hierarchy.js'
import { printCurrentPageElements } from './show_elements_in_page.js'
import PagesData from './data/page_data.js'
import { main_div_for_page } from './elements/basic_div.js'

import Div from './elements/div_element.js'
import Button from './elements/button_element.js'
import Input from './elements/input_element.js'
import Select from './elements/select_element.js'
import Option from './elements/option_element.js'

const id_for_element = 'element_id_'
let index_for_id = 100

export function addElementInsideElement(element) {
	const activeElement = document.getElementById(ElementData.activeElementId)
	if (activeElement) {
		const id = id_for_element + index_for_id
		const name = element + '_' + index_for_id

		if (ElementData.activeElementId == 'page') {
			PagesData.pages[PagesData.activePage].children.push(main_div_for_page())
		} else if (element == ElementTags.DIV) {
			const div = new Div(name, id)
			addIntoPagesData(ElementData.activeElementId, div, PagesData.pages[PagesData.activePage].children)
		} else if (element == ElementTags.BUTTON) {
			const button = new Button(name, id)
			addIntoPagesData(ElementData.activeElementId, button, PagesData.pages[PagesData.activePage].children)
		} else if (element == ElementTags.INPUT) {
			const input = new Input(name, id)
			addIntoPagesData(ElementData.activeElementId, input, PagesData.pages[PagesData.activePage].children)
		} else if (element == ElementTags.SELECT) {
			const select = new Select(name, id)
			addIntoPagesData(ElementData.activeElementId, select, PagesData.pages[PagesData.activePage].children)
		} else if (element == ElementTags.OPTION) {
			const option = new Option()
			addIntoPagesData(ElementData.activeElementId, option, PagesData.pages[PagesData.activePage].children)
		}

		index_for_id++

		printCurrentPageHierarchy()
		printCurrentPageElements()
	}
}

function addIntoPagesData(element_id, element_to_add, children) {
	for (let child of children) {
		if (child.can_have_children) {
			if (child.id == element_id) {
				child.children.push(element_to_add)
				return true
			}

			if (addIntoPagesData(element_id, element_to_add, child.children)) {
				return true
			}
		}
	}

	return false
}
