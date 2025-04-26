const closeBtns = document.getElementsByClassName('dialog_box_container_closebtn')

for (let closeBtn of closeBtns) {
	closeBtn.addEventListener('click', () => {
		const dialog_box_container = document.getElementById('dialog_box_container')

		if (dialog_box_container) {
			dialog_box_container.style.display = 'none'
		}
	})
}

function showDialogBoxContainer(id) {
	const dialog_box_container = document.getElementById('dialog_box_container')
	const dialog_box = document.getElementById(id)

	if (dialog_box_container) {
		for (let child of dialog_box_container.children) {
			child.style.display = 'none'
		}

		dialog_box_container.style.display = 'flex'
	}

	if (dialog_box) {
		dialog_box.style.display = 'block'
	}
}
