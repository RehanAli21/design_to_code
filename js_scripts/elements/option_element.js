import TagElement from './base_class.js'
import { ElementTags } from '../data/enums.js'

let option_num = 1
class Option extends TagElement {
	constructor(name, id) {
		super(ElementTags.OPTION, name, null, id, [], `option_${option_num}`, false, [])
		this.value = `option_${option_num}`
		option_num++
	}
}

export default Option
