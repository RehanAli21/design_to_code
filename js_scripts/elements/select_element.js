import TagElement from './base_class.js'
import { ElementTags } from '../data/enums.js'

class Select extends TagElement {
	constructor(name, id) {
		super(ElementTags.SELECT, name, null, id, [], '', true, [])
	}
}

export default Select
