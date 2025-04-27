import TagElement from './base_class.js'

class Div extends TagElement {
	constructor(name, id) {
		super('div', name, null, id, [], '', true)
	}
}

export default Div
