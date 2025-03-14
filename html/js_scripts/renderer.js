const func = async () => {
	const response = await window.versions.ping()
	alert(response) // prints out 'pong'
}

func()
