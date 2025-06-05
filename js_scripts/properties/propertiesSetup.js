import setUpAppearance from './appearance/appearance.js'
import setUpFont from './font/font.js'
import setUpIndividualProperties from './individual/individual.js'
import setUpPageProperties from './page/page.js'
import setUpSelfAlign from './selfAlign/selfAlign.js'
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
	setUpSelfAlign()
	setUpIndividualProperties()
}

setUpAllProperties()
