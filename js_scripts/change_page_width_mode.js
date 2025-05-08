import { PageModes } from './data/enums.js'
import PagesData from './data/page_data.js'

const xsWidthBtn = document.getElementById('xs_width_mode')
const sWidthBtn = document.getElementById('s_width_mode')
const mWidthBtn = document.getElementById('m_width_mode')
const lWidthBtn = document.getElementById('l_width_mode')
const xlWidthBtn = document.getElementById('xl_width_mode')
const page = document.getElementById('page')

xsWidthBtn.addEventListener('click', () => changePageWidthMode(PageModes.XSMALL))
sWidthBtn.addEventListener('click', () => changePageWidthMode(PageModes.SMALL))
mWidthBtn.addEventListener('click', () => changePageWidthMode(PageModes.MEDIUM))
lWidthBtn.addEventListener('click', () => changePageWidthMode(PageModes.LARGE))
xlWidthBtn.addEventListener('click', () => changePageWidthMode(PageModes.XLARGE))

changeBtnColors(PagesData.activePageWidthMode)

function changePageWidthMode(pageMode) {
	PagesData.activePageWidthMode = pageMode

	page.style.minWidth = `${pageMode}px`

	changeBtnColors(pageMode)
}

function changeBtnColors(pageMode) {
	if (pageMode == PageModes.XSMALL) {
		xsWidthBtn.style.backgroundColor = 'var(--primary)'
		sWidthBtn.style.backgroundColor = ''
		mWidthBtn.style.backgroundColor = ''
		lWidthBtn.style.backgroundColor = ''
		xlWidthBtn.style.backgroundColor = ''
	} else if (pageMode == PageModes.SMALL) {
		xsWidthBtn.style.backgroundColor = ''
		sWidthBtn.style.backgroundColor = 'var(--primary)'
		mWidthBtn.style.backgroundColor = ''
		lWidthBtn.style.backgroundColor = ''
		xlWidthBtn.style.backgroundColor = ''
	} else if (pageMode == PageModes.MEDIUM) {
		xsWidthBtn.style.backgroundColor = ''
		sWidthBtn.style.backgroundColor = ''
		mWidthBtn.style.backgroundColor = 'var(--primary)'
		lWidthBtn.style.backgroundColor = ''
		xlWidthBtn.style.backgroundColor = ''
	} else if (pageMode == PageModes.LARGE) {
		xsWidthBtn.style.backgroundColor = ''
		sWidthBtn.style.backgroundColor = ''
		mWidthBtn.style.backgroundColor = ''
		lWidthBtn.style.backgroundColor = 'var(--primary)'
		xlWidthBtn.style.backgroundColor = ''
	} else if (pageMode == PageModes.XLARGE) {
		xsWidthBtn.style.backgroundColor = ''
		sWidthBtn.style.backgroundColor = ''
		mWidthBtn.style.backgroundColor = ''
		lWidthBtn.style.backgroundColor = ''
		xlWidthBtn.style.backgroundColor = 'var(--primary)'
	}
}
