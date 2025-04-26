let theme = window.localStorage.getItem('theme')
const themeToggler = document.getElementById('theme-toggle')

if (!theme) {
	window.localStorage.setItem('theme', 'light')
	themeToggler.textContent = '🌙' // Dark mode
} else {
	// Change button icon
	if (theme == 'dark') {
		themeToggler.textContent = '🌙' // Dark mode
	} else {
		themeToggler.textContent = '🌞' // Light mode
	}
}

function changeTheme() {
	// Get the theme value from localStorage
	let theme = window.localStorage.getItem('theme')

	if (theme) {
		if (theme == 'light') {
			const newThemeMode = 'dark'
			changeRootVars(newThemeMode)
			window.localStorage.setItem('theme', newThemeMode)
		} else if (theme == 'dark') {
			const newThemeMode = 'light'
			changeRootVars(newThemeMode)
			window.localStorage.setItem('theme', newThemeMode)
		}
	} else {
		const newThemeMode = 'dark'
		changeRootVars(newThemeMode)
		window.localStorage.setItem('theme', newThemeMode)
	}
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
		root.style.setProperty('--primary', '#6a1ce8')
		root.style.setProperty('--secondary', '#f386aa')
		root.style.setProperty('--accent', '#ed6052')
	} else if (theme == 'dark') {
		root.style.setProperty('--shade-one', '#1c1c1c')
		root.style.setProperty('--shade-two', '#252525')
		root.style.setProperty('--shade-three', '#474747')
		root.style.setProperty('--shade-four', '#696969')
		root.style.setProperty('--shade-five', '#8b8b8b')
		root.style.setProperty('--shade-six', '#adadad')
		root.style.setProperty('--text', '#f9fef2')
		root.style.setProperty('--background', '#282828')
		root.style.setProperty('--primary', '#6a1ce8')
		root.style.setProperty('--secondary', '#f386aa')
		root.style.setProperty('--accent', '#ed6052')
	}
}

themeToggler.addEventListener('click', () => {
	console.log('changing theme')
	changeTheme()

	// Change button icon
	if (themeToggler.textContent == '🌙') {
		themeToggler.textContent = '🌞' // Light mode
	} else {
		themeToggler.textContent = '🌙' // Dark mode
	}
})
