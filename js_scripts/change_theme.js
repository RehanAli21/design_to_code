import PagesData from './data/page_data.js'

let theme = window.localStorage.getItem('theme')
const themeToggler = document.getElementById('theme-toggle')
const styles_Per_View_Mode_Toggler = document.getElementById('styles_Per_View_Mode_Img')

themeToggler.textContent = theme && theme == 'dark' ? '\u2600' : theme && theme == 'light' ? '\u{1F319}' : '\u{1F319}'

if (!theme) {
	window.localStorage.setItem('theme', 'light')
} else {
	changeRootVars(theme)
}

function changeTheme() {
	theme = window.localStorage.getItem('theme')

	const newThemeMode = theme && theme == 'light' ? 'dark' : theme && theme == 'dark' ? 'light' : 'dark'

	changeRootVars(newThemeMode)
	window.localStorage.setItem('theme', newThemeMode)
}

function changeRootVars(theme) {
	// Get the root element (the <html> tag)
	const root = document.documentElement

	if (theme == 'light') {
		root.style.setProperty('--shade-one', '#e3e3e3')
		root.style.setProperty('--shade-two', '#dadada')
		root.style.setProperty('--shade-three', '#b8b8b8')
		root.style.setProperty('--shade-four', '#969696')
		root.style.setProperty('--shade-five', '#747474')
		root.style.setProperty('--shade-six', '#525252')
		root.style.setProperty('--text', '#06010d')
		root.style.setProperty('--background', '#fdfdfd')

		styles_Per_View_Mode_Toggler.src = PagesData.applyStylesOnAllWdiths
			? './assets/white_responsive_icon.svg'
			: './assets/black_responsive_icon.svg'
	} else if (theme == 'dark') {
		root.style.setProperty('--shade-one', '#1c1c1c')
		root.style.setProperty('--shade-two', '#252525')
		root.style.setProperty('--shade-three', '#474747')
		root.style.setProperty('--shade-four', '#696969')
		root.style.setProperty('--shade-five', '#8b8b8b')
		root.style.setProperty('--shade-six', '#adadad')
		root.style.setProperty('--text', '#f9fef2')
		root.style.setProperty('--background', '#282828')

		styles_Per_View_Mode_Toggler.src = './assets/white_responsive_icon.svg'
	}
}

themeToggler.addEventListener('click', () => {
	changeTheme()

	// Change button icon
	if (themeToggler.textContent == '\u{1F319}') {
		themeToggler.textContent = '\u2600' // Light mode
	} else {
		themeToggler.textContent = '\u{1F319}' // Dark mode
	}
})
