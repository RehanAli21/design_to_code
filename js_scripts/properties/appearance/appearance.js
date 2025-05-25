import setUpBackgroundColor from './background_color.js'
import setUpBorder from './border.js'
import setUpInnerXSpace from './inner_x_space.js'
import setUpInnerYSpace from './inner_y_space.js'
import setUpShadow from './shadow.js'

export default function setUpAppearance() {
	setUpBackgroundColor()
	setUpInnerXSpace()
	setUpInnerYSpace()
	setUpBorder()
	setUpShadow()
}
