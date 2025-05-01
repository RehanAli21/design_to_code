import TagElement from './base_class.js'
import { ElementTags } from '../data/enums.js'

class Input extends TagElement {
	constructor(name, id) {
		super(ElementTags.INPUT, name, null, id, [], '', false, [])
		this.type = 'text'
		this.placeholder = 'input'
		this.defaultValue = null
		this.min = null
		this.max = null
		this.readonly = null
		this.disabled = null
		this.autocomplete = null
	}
}

export default Input
