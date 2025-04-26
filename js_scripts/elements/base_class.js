class TagElement {
	constructor(tagName, name, styles, id, classes, innerText, can_have_children) {
		this.tagName = tagName
		this.name = name
		this.showChildrenInHeirarchy = false
		this.id = id ? id : ''
		this.classes = classes ? innerText : ''
		this.can_have_children = can_have_children ? can_have_children : false
		this.styles = styles
			? styles
			: {
					small: {},
					medium: {},
					large: {},
					xLarge: {},
			  }
	}
}

export default TagElement
