import TagElement from './base_class.js'
import { ElementTags } from '../data/enums.js'

let textValueIndew = 1
class Text extends TagElement {
	constructor(name, id) {
		super(ElementTags.TEXT, name, null, id, [], `text_${textValueIndew++}`, false, [])
		this.type = 'p'
		this.href = ''
	}
}

export default Text
