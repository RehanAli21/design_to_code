const box = document.getElementById('page')
const box_container = document.getElementById('page_viewer')

let isDragging = false
let offsetX, offsetY

// Store original position
const originalPosition = {
	left: box.offsetLeft,
	top: box.offsetTop,
}

box.addEventListener('mousedown', e => {
	isDragging = true
	offsetX = e.clientX - box.offsetLeft
	offsetY = e.clientY - box.offsetTop
	box.classList.add('dragging')
})

document.addEventListener('mousemove', e => {
	if (isDragging) {
		box.style.left = e.clientX - offsetX + 'px'
		box.style.top = e.clientY - offsetY + 'px'
	}
})

document.addEventListener('mouseup', () => {
	isDragging = false
	box.classList.remove('dragging')
})

box_container.addEventListener('dblclick', () => {
	box.style.left = originalPosition.left + 'px'
	box.style.top = originalPosition.top + 'px'
})
