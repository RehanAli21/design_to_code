import setUpAppearance from './appearance/appearance.js'
import setUpPageProperties from './page/page.js'
import setUpText from './text/text.js'
import setUpTransform from './transform/transform.js'

function setUpAllProperties() {
	setUpAppearance()
	setUpTransform()
	setUpText()
	setUpPageProperties()
}

setUpAllProperties()
