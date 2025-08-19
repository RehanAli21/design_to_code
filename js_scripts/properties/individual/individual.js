import elementName from './elementName.js'
import innerText from './innerText.js'
import inputType from './inputType.js'
import max from './max.js'
import min from './min.js'
import placeholder from './placeholder.js'

export default function setUpIndividualProperties() {
	innerText()
	placeholder()
	inputType()
	min()
	max()
	elementName()
}
