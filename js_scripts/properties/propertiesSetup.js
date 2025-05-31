import setUpAppearance from './appearance/appearance.js'
import setUpFont from './font/font.js'
import setUpPageProperties from './page/page.js'
import setUpText from './text/text.js'
import setUpTextAlign from './textAlign/textAlign.js'
import setUpTransform from './transform/transform.js'

function setUpAllProperties() {
	setUpAppearance()
	setUpTransform()
	setUpText()
	setUpFont()
	setUpPageProperties()
	setUpTextAlign()
}

setUpAllProperties()
