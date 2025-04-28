import PagesData from './data/page_data.js'
import { main_div_for_page } from './elements/basic_div.js'
import { printCurrentPageHierarchy } from './show_elements_hierarchy.js'
import { printCurrentPageElements } from './show_elements_in_page.js'

const select_for_delete_page = document.getElementById('delete-page-select')
const select = document.getElementById('select_active_page_select')

// for changing active page
select.addEventListener('change', e => {
	PagesData.activePage = e.target.value

	setPageActiveState()
})

// for showing pages in main select which let user change page
// and delete select which let user delete page
function setPageActiveState() {
	const activePageValue = PagesData.activePage

	const allPagesValues = []

	for (let value in PagesData.pages) {
		allPagesValues.push(value)
	}

	if (select) {
		select.innerHTML = ''
		for (let pageValue of allPagesValues) {
			const option = document.createElement('option')
			option.value = pageValue
			option.innerText = pageValue

			select.appendChild(option)
		}

		select.value = activePageValue
	}

	if (select_for_delete_page) {
		select_for_delete_page.innerHTML = ''
		for (let pageValue of allPagesValues) {
			const option = document.createElement('option')
			option.value = pageValue
			option.innerText = pageValue

			select_for_delete_page.appendChild(option)
		}

		select_for_delete_page.value = activePageValue
	}

	printCurrentPageHierarchy()
	printCurrentPageElements()
}

setPageActiveState()

function addPage() {
	const input = document.getElementById('add_page_input')

	if (input) {
		if (input.value == '') {
			alert('Please enter value, input can not be empty')
			return
		}

		for (let pageValue in PagesData.pages) {
			if (pageValue.toLowerCase() == input.value.toLowerCase()) {
				alert(`${input.value} already exists!!!!`)
				return
			}
		}

		PagesData.pages[input.value] = {
			'background-color': 'white',
			children: [main_div_for_page()],
		}

		setPageActiveState()
		alert('Page has been added')
		return
	}
}
document.getElementById('add_page_btn').addEventListener('click', addPage)

function deletePage() {
	if (select_for_delete_page) {
		const result = confirm(`Do you want to delete ${select_for_delete_page.value} page?`)
		if (result) {
			if (Object.keys(PagesData.pages).length < 2) {
				alert('Sorry, cannot delete. Because there are only one page.')
				return
			}

			if (PagesData.pages.hasOwnProperty(select_for_delete_page.value)) {
				delete PagesData.pages[select_for_delete_page.value]

				setPageActiveState()
			}
		}
	}
}
document.getElementById('delete_page_btn').addEventListener('click', deletePage)
