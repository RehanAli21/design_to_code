class TagElement {
	constructor(tagName, name, styles, id, classes, innerText, can_have_children, children) {
		this.tagName = tagName
		this.name = name
		this.showChildrenInHeirarchy = true
		this.id = id ? id : ''
		this.classes = classes ? classes : []
		this.innerText = innerText ? innerText : ''
		this.can_have_children = can_have_children ? can_have_children : false
		this.children = children ? children : []
		this.styles = styles
			? styles
			: {
					xsmall: {},
					small: {},
					medium: {},
					large: {},
					xLarge: {},
			  }
	}
}

export default TagElement
