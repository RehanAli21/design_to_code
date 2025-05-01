import TagElement from './base_class.js'
import { ElementTags } from '../data/enums.js'

class Button extends TagElement {
	constructor(name, id) {
		super(ElementTags.BUTTON, name, null, id, [], 'button', false, [])
	}
}

export default Button
