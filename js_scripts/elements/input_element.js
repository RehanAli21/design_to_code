import TagElement from './base_class.js'
import { ElementTags, InputTypes } from '../data/enums.js'

class Input extends TagElement {
	constructor(name, id) {
		super(ElementTags.INPUT, name, null, id, [], '', false, [])
		this.type = InputTypes.TEXT
		this.placeholder = 'input'
		this.defaultValue = ''
		this.min = null
		this.max = null
		this.readonly = null
		this.disabled = null
		this.autocomplete = null
	}
}

export default Input
