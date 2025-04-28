import TagElement from './base_class.js'
import { ElementTags } from '../data/enums.js'

class Div extends TagElement {
	constructor(name, id) {
		super(ElementTags.DIV, name, null, id, [], '', true, [])
	}
}

export default Div
