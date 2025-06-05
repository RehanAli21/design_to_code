import TagElement from './base_class.js'
import { ElementTags, InputTypes } from '../data/enums.js'

class Input extends TagElement {
	constructor(name, id) {
		const styles = {
			xsmall: { border: '1px solid black' },
			small: { border: '1px solid black' },
			medium: { border: '1px solid black' },
			large: { border: '1px solid black' },
			xlarge: { border: '1px solid black' },
		}

		super(ElementTags.INPUT, name, styles, id, [], '', false, [])
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
