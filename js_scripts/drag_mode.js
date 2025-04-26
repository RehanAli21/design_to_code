const box = document.getElementById('pages_container')
const box_container = document.getElementById('page_viewer')

let move = false
let oldX = 0
let oldY = 0

let x_translate = 0
let y_translate = 0
let scale = 1

function changeState() {
	box.style.transform = `scale(${scale}) translate(${x_translate}px, ${y_translate}px)`
}

box_container.addEventListener('mousedown', () => {
	move = true
	box_container.style.cursor = 'grabbing'
})

function disableMovement() {
	move = false
	box_container.style.cursor = ''
}
box_container.addEventListener('mouseup', disableMovement)
box_container.addEventListener('mouseleave', disableMovement)

function resetEveryThing() {
	box.style.transform = ''
	oldX = 0
	oldY = 0
	x_translate = 0
	y_translate = 0
	scale = 1

	changeState()
}
box_container.addEventListener('dblclick', resetEveryThing)

box_container.addEventListener('mousemove', e => {
	if (move) {
		if (oldX < e.pageX) {
			x_translate += 10
		} else if (oldX > e.pageX) {
			x_translate -= 10
		}

		if (oldY < e.pageY) {
			y_translate += 10
		} else if (oldY > e.pageY) {
			y_translate -= 10
		}

		oldX = e.pageX
		oldY = e.pageY

		changeState()
	}
})

box_container.addEventListener('wheel', e => {
	if (e.deltaY === -100) {
		scale += 0.05
	} else if (e.deltaY === 100) {
		scale -= 0.05
	}

	changeState()
})
